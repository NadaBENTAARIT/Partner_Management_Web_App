import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccadminComponent } from './accadmin.component';

describe('AccadminComponent', () => {
  let component: AccadminComponent;
  let fixture: ComponentFixture<AccadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
