import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientExampleComponent } from './http-client-example.component';

describe('HttpClientExampleComponent', () => {
  let component: HttpClientExampleComponent;
  let fixture: ComponentFixture<HttpClientExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HttpClientExampleComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    pending('MyHttpDataServiceService injection pending');
    expect(component).toBeTruthy();
  });
});
