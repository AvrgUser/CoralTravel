import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToureCardComponent } from './toure-card.component';

describe('ToureCardComponent', () => {
  let component: ToureCardComponent;
  let fixture: ComponentFixture<ToureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToureCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
