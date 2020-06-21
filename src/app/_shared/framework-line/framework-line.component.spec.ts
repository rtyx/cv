import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworkLineComponent } from './framework-line.component';

describe('FrameworkLineComponent', () => {
  let component: FrameworkLineComponent;
  let fixture: ComponentFixture<FrameworkLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrameworkLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrameworkLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
