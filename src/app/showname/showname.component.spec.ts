import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShownameComponent } from './showname.component';

describe('ShownameComponent', () => {
  let component: ShownameComponent;
  let fixture: ComponentFixture<ShownameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShownameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShownameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
