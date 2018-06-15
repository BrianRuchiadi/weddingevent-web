import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedpacketComponent } from './redpacket.component';

describe('RedpacketComponent', () => {
  let component: RedpacketComponent;
  let fixture: ComponentFixture<RedpacketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedpacketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedpacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
