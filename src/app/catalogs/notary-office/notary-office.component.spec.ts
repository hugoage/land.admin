import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaryOfficeComponent } from './notary-office.component';

describe('NotaryOfficeComponent', () => {
  let component: NotaryOfficeComponent;
  let fixture: ComponentFixture<NotaryOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaryOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotaryOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
