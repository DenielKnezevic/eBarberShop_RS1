import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PonudaModalComponent } from './ponuda-modal.component';

describe('PonudaModalComponent', () => {
  let component: PonudaModalComponent;
  let fixture: ComponentFixture<PonudaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PonudaModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PonudaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
