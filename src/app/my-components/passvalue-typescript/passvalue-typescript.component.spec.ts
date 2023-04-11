import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassvalueTypescriptComponent } from './passvalue-typescript.component';

describe('PassvalueTypescriptComponent', () => {
  let component: PassvalueTypescriptComponent;
  let fixture: ComponentFixture<PassvalueTypescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassvalueTypescriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassvalueTypescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
