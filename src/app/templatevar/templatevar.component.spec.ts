import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevarComponent } from './templatevar.component';

describe('TemplatevarComponent', () => {
  let component: TemplatevarComponent;
  let fixture: ComponentFixture<TemplatevarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatevarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatevarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
