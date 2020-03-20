import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MtbShopComponent } from './mtb-shop.component';

describe('MtbShopComponent', () => {
  let component: MtbShopComponent;
  let fixture: ComponentFixture<MtbShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MtbShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MtbShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
