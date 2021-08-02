import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaLoginComponent } from './agenda-login.component';

describe('AgendaLoginComponent', () => {
  let component: AgendaLoginComponent;
  let fixture: ComponentFixture<AgendaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
