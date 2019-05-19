import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProertybindingComponent } from './proertybinding.component';

describe('ProertybindingComponent', () => {
  let component: ProertybindingComponent;
  let fixture: ComponentFixture<ProertybindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProertybindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProertybindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
