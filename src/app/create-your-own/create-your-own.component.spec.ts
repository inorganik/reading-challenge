import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateYourOwnComponent } from './create-your-own.component';

describe('CreateYourOwnComponent', () => {
  let component: CreateYourOwnComponent;
  let fixture: ComponentFixture<CreateYourOwnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateYourOwnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateYourOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
