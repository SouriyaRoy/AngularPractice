import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootFormComponent } from './boot-form.component';

describe('BootFormComponent', () => {
  let component: BootFormComponent;
  let fixture: ComponentFixture<BootFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
