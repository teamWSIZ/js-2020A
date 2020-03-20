import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ncov2019Component } from './ncov2019.component';

describe('Ncov2019Component', () => {
  let component: Ncov2019Component;
  let fixture: ComponentFixture<Ncov2019Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ncov2019Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ncov2019Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
