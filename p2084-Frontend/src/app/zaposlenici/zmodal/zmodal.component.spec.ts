import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZModalComponent } from './zmodal.component';

describe('ZModalComponent', () => {
  let component: ZModalComponent;
  let fixture: ComponentFixture<ZModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
