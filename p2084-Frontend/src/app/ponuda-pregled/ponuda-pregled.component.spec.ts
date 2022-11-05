import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonudaPregledComponent } from './ponuda-pregled.component';

describe('PonudaPregledComponent', () => {
  let component: PonudaPregledComponent;
  let fixture: ComponentFixture<PonudaPregledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonudaPregledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonudaPregledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
