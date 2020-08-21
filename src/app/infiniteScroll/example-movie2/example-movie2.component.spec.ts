import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMovie2Component } from './example-movie2.component';

describe('ExampleMovie2Component', () => {
  let component: ExampleMovie2Component;
  let fixture: ComponentFixture<ExampleMovie2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleMovie2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMovie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
