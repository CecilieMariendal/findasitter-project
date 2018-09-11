import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitterRegisterComponent } from './sitter-register.component';

describe('SitterRegisterComponent', () => {
  let component: SitterRegisterComponent;
  let fixture: ComponentFixture<SitterRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitterRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitterRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
