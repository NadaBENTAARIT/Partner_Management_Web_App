import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixpartnerComponent } from './choixpartner.component';

describe('ChoixpartnerComponent', () => {
  let component: ChoixpartnerComponent;
  let fixture: ComponentFixture<ChoixpartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixpartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixpartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
