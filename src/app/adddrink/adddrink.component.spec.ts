import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddrinkComponent } from './adddrink.component';

describe('AdddrinkComponent', () => {
  let component: AdddrinkComponent;
  let fixture: ComponentFixture<AdddrinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddrinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
