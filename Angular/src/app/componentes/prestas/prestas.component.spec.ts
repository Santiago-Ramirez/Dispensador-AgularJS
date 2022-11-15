import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestasComponent } from './prestas.component';

describe('PrestasComponent', () => {
  let component: PrestasComponent;
  let fixture: ComponentFixture<PrestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
