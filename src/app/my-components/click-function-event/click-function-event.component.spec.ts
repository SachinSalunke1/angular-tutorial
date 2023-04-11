import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickFunctionEventComponent } from './click-function-event.component';

describe('ClickFunctionEventComponent', () => {
  let component: ClickFunctionEventComponent;
  let fixture: ComponentFixture<ClickFunctionEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClickFunctionEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickFunctionEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
