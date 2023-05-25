import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupartnerComponent } from './menupartner.component';

describe('MenupartnerComponent', () => {
  let component: MenupartnerComponent;
  let fixture: ComponentFixture<MenupartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenupartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenupartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
