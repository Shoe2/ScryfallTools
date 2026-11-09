import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

interface BoosterPack {
  name: string;
  imageUrl?: string;
}

@Component({
  selector: 'app-the-wheel-of-chaos',
  templateUrl: './the-wheel-of-chaos.component.html',
  styleUrls: ['./the-wheel-of-chaos.component.css'],
})
export class TheWheelOfChaosComponent implements AfterViewInit {
  isLoading = true;
  boosterPackData: BoosterPack[] = [];
  @ViewChild('tapeTrack') tapeTrack!: ElementRef;
  spinBtnDisabled = false;
  @ViewChild('outputReadout') outputReadout!: ElementRef;
  cardWidth = 150;
  isSpinning = false;
  trackPosition = 0;
  imagesLoaded = false;

  constructor(private readonly $http: HttpClient) {}

  ngAfterViewInit() {
    this.$http
      .get('https://mtgjson.com/api/v5/csv/sealedProducts.csv', {
        responseType: 'text',
      })
      .subscribe((data) => {
        let csvToRowArray = data.split('\n');
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          let row = csvToRowArray[index].split(',');

          if (row[2] === 'booster_pack') {
            const identifiers = row[4];
            let imageUrl: string | undefined = undefined;
            let name = '';
            for (let part of row) {
              if (part.includes('tcgplayerProductId')) {
                const tcgPlayerProductId = part.match(/([0-9])\w+/g);
                imageUrl = `https://tcgplayer-cdn.tcgplayer.com/product/${tcgPlayerProductId}_in_200x200.jpg`;
              }

              if (part.includes(' Booster Pack')) {
                name = part;
              }
            }
            if (name) {
              this.boosterPackData.push({
                name,
                imageUrl,
              });
            }
          }
          if (index === csvToRowArray.length - 2) {
             this.preloadPackImages(this.boosterPackData)
      .then(() => {
        this.isLoading = false;
        this.imagesLoaded = true;
        this.spinBtnDisabled = false; 
        this.outputReadout.nativeElement.innerText = 'Ready to Spin!';
                    this.initTrackLayout();

      })
      .catch((err) => {
        console.error('Failed to cache booster pack arts:', err);
        this.outputReadout.nativeElement.innerText = 'Error Loading Assets';
      });
          }
        }
      });
  }

  preloadPackImages(packs: any[]): Promise<void[]> {
    const loadPromises = packs.map((pack) => {
      return new Promise<void>((resolve) => {

        if (!pack.imageUrl) {
          resolve();
          return;
        }

        const img = new Image();
        img.src = pack.imageUrl;
        
        img.onload = () => resolve();
        img.onerror = () => {
          console.warn(`Failed to preload image: ${pack.imageUrl}`);
          resolve(); 
        };
      });
    });

    return Promise.all(loadPromises);
  }

  initTrackLayout() {
    this.tapeTrack.nativeElement.innerHTML = '';

    const dynamicMultiplier =
      Math.ceil(4000 / (this.boosterPackData.length * this.cardWidth)) + 2;

    for (let m = 0; m < dynamicMultiplier; m++) {
      this.boosterPackData.forEach((pack) => {
        const card = document.createElement('div');
        card.className = 'pack-card';

        const artFrame = document.createElement('div');
        artFrame.className = 'pack-art-frame';

        const img = document.createElement('img');
        img.alt = pack.name;
        img.className = 'pack-art';

        if (pack.imageUrl) {
          img.src = pack.imageUrl;
          artFrame.appendChild(img);
        } else {
          artFrame.innerHTML = '<span class="pack-art-placeholder">🎴</span>';
        }

        
        card.appendChild(artFrame);
        this.tapeTrack.nativeElement.appendChild(card);
      });
    }

    this.trackPosition = -(380 - this.cardWidth / 2);
    this.tapeTrack.nativeElement.style.transform = `translateX(${this.trackPosition}px)`;
    this.isLoading = false;
  }

spin() {
  if (this.isSpinning || !this.imagesLoaded || this.boosterPackData.length === 0) return;
  this.isSpinning = true;
  this.spinBtnDisabled = true;
  this.outputReadout.nativeElement.classList.remove('reveal');
  this.outputReadout.nativeElement.innerText = 'Spinning...';

  const selectedIndex = Math.floor(Math.random() * this.boosterPackData.length);
  const chosenPack = this.boosterPackData[selectedIndex];

  // Force it to spin past exactly 3 or 4 full sets of cards
  const executionLoopOffset = Math.floor(3 + Math.random() * 2); 
  
  // This calculates exactly which card in the long chain to stop on
  const pixelTargetIndex = (executionLoopOffset * this.boosterPackData.length) + selectedIndex;

  const viewCenterOffset = 380;
  const cardCenterAdjust = this.cardWidth / 2;
  const targetPixelPosition = -(
    pixelTargetIndex * this.cardWidth -
    viewCenterOffset +
    cardCenterAdjust
  );

  // Smooth blur spin effect
  this.tapeTrack.nativeElement.style.transition = 'transform 7s cubic-bezier(0.1, 0.85, 0.15, 1)';
  this.tapeTrack.nativeElement.style.transform = `translateX(${targetPixelPosition}px)`;

  setTimeout(() => {
    this.isSpinning = false;
    this.spinBtnDisabled = false;
    this.outputReadout.nativeElement.innerText = chosenPack.name;
    this.outputReadout.nativeElement.classList.add('reveal');

    // Instantly snap back to the first set (Loop 0) seamlessly
    this.tapeTrack.nativeElement.style.transition = 'none';
    
    const normalizationIndex = selectedIndex;
    const normalizedPos = -(
      normalizationIndex * this.cardWidth -
      viewCenterOffset +
      cardCenterAdjust
    );
    this.trackPosition = normalizedPos;
    this.tapeTrack.nativeElement.style.transform = `translateX(${this.trackPosition}px)`;
  }, 7000);
}

}
