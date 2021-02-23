import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgtempleteComponent } from './ngtemplete.component';

describe('NgtempleteComponent', () => {
  let component: NgtempleteComponent;
  let fixture: ComponentFixture<NgtempleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgtempleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgtempleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
