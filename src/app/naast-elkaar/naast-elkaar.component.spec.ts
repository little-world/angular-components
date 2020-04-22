import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaastElkaarComponent } from './naast-elkaar.component';

describe('NaastElkaarComponent', () => {
  let component: NaastElkaarComponent;
  let fixture: ComponentFixture<NaastElkaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaastElkaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaastElkaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
