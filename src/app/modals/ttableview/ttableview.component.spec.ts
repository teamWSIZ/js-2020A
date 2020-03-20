import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TtableviewComponent } from './ttableview.component';

describe('TtableviewComponent', () => {
  let component: TtableviewComponent;
  let fixture: ComponentFixture<TtableviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TtableviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TtableviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
