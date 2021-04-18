import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDateServiceUseComponentComponent } from './my-date-service-use-component.component';

describe('MyDateServiceUseComponentComponent', () => {
  let component: MyDateServiceUseComponentComponent;
  let fixture: ComponentFixture<MyDateServiceUseComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDateServiceUseComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDateServiceUseComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
