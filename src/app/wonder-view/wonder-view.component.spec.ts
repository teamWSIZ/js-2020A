import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WonderViewComponent } from './wonder-view.component';

describe('WonderViewComponent', () => {
  let component: WonderViewComponent;
  let fixture: ComponentFixture<WonderViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WonderViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WonderViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
