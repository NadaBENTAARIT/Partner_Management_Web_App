import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerconnexionComponent } from './partnerconnexion.component';

describe('PartnerconnexionComponent', () => {
  let component: PartnerconnexionComponent;
  let fixture: ComponentFixture<PartnerconnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerconnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerconnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
