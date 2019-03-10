import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrservComponent } from './errserv.component';

describe('ErrservComponent', () => {
  let component: ErrservComponent;
  let fixture: ComponentFixture<ErrservComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrservComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
