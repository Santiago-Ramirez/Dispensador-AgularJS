import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RellenarComponent } from './rellenar.component';

describe('RellenarComponent', () => {
  let component: RellenarComponent;
  let fixture: ComponentFixture<RellenarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RellenarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RellenarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
