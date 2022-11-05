import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LModalComponent } from './lmodal.component';

describe('LModalComponent', () => {
  let component: LModalComponent;
  let fixture: ComponentFixture<LModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
