import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginupdatedComponent } from './loginupdated.component';

describe('LoginupdatedComponent', () => {
  let component: LoginupdatedComponent;
  let fixture: ComponentFixture<LoginupdatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginupdatedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginupdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
