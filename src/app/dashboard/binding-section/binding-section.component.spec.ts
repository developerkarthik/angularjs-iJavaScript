import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingSectionComponent } from './binding-section.component';

describe('BindingSectionComponent', () => {
  let component: BindingSectionComponent;
  let fixture: ComponentFixture<BindingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
