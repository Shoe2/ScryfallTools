import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchidektDeckStatsComponent } from './archidekt-deck-stats.component';

describe('ArchidektDeckStatsComponent', () => {
  let component: ArchidektDeckStatsComponent;
  let fixture: ComponentFixture<ArchidektDeckStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchidektDeckStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchidektDeckStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
