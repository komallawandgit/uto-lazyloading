import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoovieCardComponent } from './moovie-card.component';

describe('MoovieCardComponent', () => {
  let component: MoovieCardComponent;
  let fixture: ComponentFixture<MoovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
