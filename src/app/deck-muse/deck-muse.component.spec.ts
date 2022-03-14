import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckMuseComponent } from './deck-muse.component';

describe('DeckMuseComponent', () => {
  let component: DeckMuseComponent;
  let fixture: ComponentFixture<DeckMuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckMuseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckMuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
