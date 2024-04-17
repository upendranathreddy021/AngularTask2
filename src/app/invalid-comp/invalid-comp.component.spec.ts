import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidCompComponent } from './invalid-comp.component';

describe('InvalidCompComponent', () => {
  let component: InvalidCompComponent;
  let fixture: ComponentFixture<InvalidCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvalidCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvalidCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
