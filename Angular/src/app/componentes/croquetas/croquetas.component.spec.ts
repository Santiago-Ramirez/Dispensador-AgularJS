import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CroquetasComponent } from './croquetas.component';

describe('CroquetasComponent', () => {
  let component: CroquetasComponent;
  let fixture: ComponentFixture<CroquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CroquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CroquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
