import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcovComponent } from './ncov.component';

describe('NcovComponent', () => {
  let component: NcovComponent;
  let fixture: ComponentFixture<NcovComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcovComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
