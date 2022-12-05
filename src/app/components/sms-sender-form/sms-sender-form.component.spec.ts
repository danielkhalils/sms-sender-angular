import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomentFormComponent } from './sms-sender-form.component';

describe('MomentFormComponent', () => {
  let component: MomentFormComponent;
  let fixture: ComponentFixture<MomentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomentFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MomentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
