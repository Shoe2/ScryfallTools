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

              if (
                part.includes(' Booster Pack') &&
                !part.includes('Six Card') &&
                !part.includes('Italian') &&
                !part.includes('Japanese') &&
                !part.includes('Minimal') &&
                !part.includes('Black Border') &&
                !part.includes('Summer Magic') &&
                !part.includes('White Border')
              ) {
                if (part.includes('"')) {
                  name = part.split('"')[6];
                } else {
                  name = part;
                  if (part === 'Visions Preview Printing Booster Pack') {
                    imageUrl = '/assets/visions-preview.jpg';
                  }

                  if (part === 'Phyrexia: All Will Be One Compleat Edition Booster Pack') {
                    imageUrl = '/assets/compleat.jpeg';
                  }
                  if(part==="Portal Demo Game Booster Pack"){
                    imageUrl='/assets/portalDemoGame.jpg'
                  }
                  if(part==="Starter 2000 Advanced Booster Pack"){
                    imageUrl = '/assets/starterSampler.jpg'
                  }
                  if(part==="Eighth Edition Demo Game Booster Pack"){
                    imageUrl = '/assets/8thEditionDemoGame.jpg'
                  }
                  if(part==="Eighth Edition Advanced Booster Pack"){
                    imageUrl = '/assets/8thEditionAdvanced.jpg'
                  }
                   if(part==="Worldwake Booster Pack"){
                    imageUrl = '/assets/worldwake.jpg'
                  }
                   if(part==="Alara Reborn Booster Pack"){
                    imageUrl = '/assets/alarareborn.jpg'
                  }
                }
              }
            }

            if (name && !imageUrl) {
              console.log(name);
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
                this.shufflePacks();
                this.initTrackLayout();
              })
              .catch((err) => {
                console.error('Failed to cache booster pack arts:', err);
                this.outputReadout.nativeElement.innerText =
                  'Error Loading Assets';
              });
          }
        }
      });
  }

  shufflePacks() {
    const copy = [...this.boosterPackData];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    this.boosterPackData = copy;
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
          delete pack.imageUrl;
          console.warn(`Failed to preload image: ${pack.name}`);
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
          artFrame.innerHTML = `<span class="pack-art-placeholder">🎴 ${pack.name}</span>`;
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
    if (
      this.isSpinning ||
      !this.imagesLoaded ||
      this.boosterPackData.length === 0
    )
      return;
    this.isSpinning = true;
    this.spinBtnDisabled = true;
    this.outputReadout.nativeElement.classList.remove('reveal');
    this.outputReadout.nativeElement.innerText = 'Spinning...';

    const selectedIndex = Math.floor(
      Math.random() * this.boosterPackData.length,
    );
    const chosenPack = this.boosterPackData[selectedIndex];

    const singleLoopWidth = this.boosterPackData.length * this.cardWidth;

    // 🎯 ADJUSTED BASELINE: Changed from 305 to 315 to swallow the 10px layout discrepancy
    const baselineOffset = 295;

    // Calculate position inside Loop 2 for the spin animation
    const targetX =
      baselineOffset - (singleLoopWidth + selectedIndex * this.cardWidth);

    // Reset class state to allow re-triggering animations
    this.tapeTrack.nativeElement.classList.remove('spinning');
    void this.tapeTrack.nativeElement.offsetWidth; // Force reflow

    // Inject the target position into CSS variable
    this.tapeTrack.nativeElement.style.setProperty(
      '--target-x',
      `${targetX}px`,
    );
    this.tapeTrack.nativeElement.classList.add('spinning');

    // Wait for the 6-second CSS animation to complete perfectly
    setTimeout(() => {
      this.isSpinning = false;
      this.spinBtnDisabled = false;
      this.outputReadout.nativeElement.innerText = chosenPack.name;
      this.outputReadout.nativeElement.classList.add('reveal');

      // Clean up animation class and variable
      this.tapeTrack.nativeElement.classList.remove('spinning');
      this.tapeTrack.nativeElement.style.removeProperty('--target-x');

      // Apply the exact same offset to snap cleanly back to Loop 1
      this.trackPosition = baselineOffset - selectedIndex * this.cardWidth;
      this.tapeTrack.nativeElement.style.transform = `translate3d(${this.trackPosition}px, 0, 0)`;
    }, 6000);
  }
}
