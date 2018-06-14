import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderpublicComponent } from './headerpublic.component';

describe('HeaderpublicComponent', () => {
  let component: HeaderpublicComponent;
  let fixture: ComponentFixture<HeaderpublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderpublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderpublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
