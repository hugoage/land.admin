import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudicialOfficeComponent } from './judicial-office.component';

describe('JudicialOfficeComponent', () => {
  let component: JudicialOfficeComponent;
  let fixture: ComponentFixture<JudicialOfficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudicialOfficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudicialOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
