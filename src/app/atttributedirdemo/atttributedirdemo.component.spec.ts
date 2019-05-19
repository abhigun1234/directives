import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtttributedirdemoComponent } from './atttributedirdemo.component';

describe('AtttributedirdemoComponent', () => {
  let component: AtttributedirdemoComponent;
  let fixture: ComponentFixture<AtttributedirdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtttributedirdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtttributedirdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
