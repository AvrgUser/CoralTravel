import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTourComponent } from './popular-tour.component';

describe('PopularTourComponent', () => {
  let component: PopularTourComponent;
  let fixture: ComponentFixture<PopularTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
