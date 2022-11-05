import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PModalComponent } from './pmodal.component';

describe('PModalComponent', () => {
  let component: PModalComponent;
  let fixture: ComponentFixture<PModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
