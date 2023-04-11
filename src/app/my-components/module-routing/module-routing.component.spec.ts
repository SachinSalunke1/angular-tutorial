import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleRoutingComponent } from './module-routing.component';

describe('ModuleRoutingComponent', () => {
  let component: ModuleRoutingComponent;
  let fixture: ComponentFixture<ModuleRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleRoutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
