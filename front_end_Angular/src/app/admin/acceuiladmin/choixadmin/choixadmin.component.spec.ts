import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixadminComponent } from './choixadmin.component';

describe('ChoixadminComponent', () => {
  let component: ChoixadminComponent;
  let fixture: ComponentFixture<ChoixadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
