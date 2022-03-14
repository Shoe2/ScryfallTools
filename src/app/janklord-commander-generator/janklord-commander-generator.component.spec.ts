import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanklordCommanderGeneratorComponent } from './janklord-commander-generator.component';

describe('JanklordCommanderGeneratorComponent', () => {
  let component: JanklordCommanderGeneratorComponent;
  let fixture: ComponentFixture<JanklordCommanderGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanklordCommanderGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JanklordCommanderGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
