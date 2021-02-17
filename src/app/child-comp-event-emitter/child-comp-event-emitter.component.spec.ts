import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompEventEmitterComponent } from './child-comp-event-emitter.component';

describe('ChildCompEventEmitterComponent', () => {
  let component: ChildCompEventEmitterComponent;
  let fixture: ComponentFixture<ChildCompEventEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompEventEmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompEventEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
