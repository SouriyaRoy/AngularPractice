import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompAppComponent } from './child-comp-app.component';

describe('ChildCompAppComponent', () => {
  let component: ChildCompAppComponent;
  let fixture: ComponentFixture<ChildCompAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildCompAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
