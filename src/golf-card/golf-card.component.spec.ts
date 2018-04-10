import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfCardComponent } from './golf-card.component';

describe('GolfCardComponent', () => {
  let component: GolfCardComponent;
  let fixture: ComponentFixture<GolfCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolfCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
