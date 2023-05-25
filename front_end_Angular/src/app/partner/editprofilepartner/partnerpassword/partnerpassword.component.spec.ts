import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerpasswordComponent } from './partnerpassword.component';

describe('PartnerpasswordComponent', () => {
  let component: PartnerpasswordComponent;
  let fixture: ComponentFixture<PartnerpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
