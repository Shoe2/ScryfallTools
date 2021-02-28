import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TribalComponent } from './tribal.component';

describe('TribalComponent', () => {
  let component: TribalComponent;
  let fixture: ComponentFixture<TribalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TribalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TribalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
