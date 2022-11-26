import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminiEditComponent } from './termini-edit.component';

describe('TerminiEditComponent', () => {
  let component: TerminiEditComponent;
  let fixture: ComponentFixture<TerminiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminiEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
