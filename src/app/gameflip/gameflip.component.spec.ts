import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameflipComponent } from './gameflip.component';

describe('GameflipComponent', () => {
  let component: GameflipComponent;
  let fixture: ComponentFixture<GameflipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameflipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameflipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
