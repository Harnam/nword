import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrfofComponent } from './errfof.component';

describe('ErrfofComponent', () => {
  let component: ErrfofComponent;
  let fixture: ComponentFixture<ErrfofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrfofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrfofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
