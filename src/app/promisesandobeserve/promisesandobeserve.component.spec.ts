import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromisesandobeserveComponent } from './promisesandobeserve.component';

describe('PromisesandobeserveComponent', () => {
  let component: PromisesandobeserveComponent;
  let fixture: ComponentFixture<PromisesandobeserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromisesandobeserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromisesandobeserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
