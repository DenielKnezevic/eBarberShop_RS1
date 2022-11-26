import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmodalComponent } from './tmodal.component';

describe('TmodalComponent', () => {
  let component: TmodalComponent;
  let fixture: ComponentFixture<TmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
