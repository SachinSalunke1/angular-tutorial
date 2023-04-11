import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularRoutingDemoComponent } from './angular-routing-demo.component';

describe('AngularRoutingDemoComponent', () => {
  let component: AngularRoutingDemoComponent;
  let fixture: ComponentFixture<AngularRoutingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularRoutingDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularRoutingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
