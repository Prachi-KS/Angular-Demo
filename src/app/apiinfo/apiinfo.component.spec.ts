import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiinfoComponent } from './apiinfo.component';

describe('ApiinfoComponent', () => {
  let component: ApiinfoComponent;
  let fixture: ComponentFixture<ApiinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
