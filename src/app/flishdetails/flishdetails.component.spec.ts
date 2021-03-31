import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlishdetailsComponent } from './flishdetails.component';

describe('FlishdetailsComponent', () => {
  let component: FlishdetailsComponent;
  let fixture: ComponentFixture<FlishdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlishdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlishdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
