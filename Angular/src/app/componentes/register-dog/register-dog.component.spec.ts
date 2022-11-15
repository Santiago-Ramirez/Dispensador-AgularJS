import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDogComponent } from './register-dog.component';

describe('RegisterDogComponent', () => {
  let component: RegisterDogComponent;
  let fixture: ComponentFixture<RegisterDogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
