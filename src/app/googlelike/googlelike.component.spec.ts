import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglelikeComponent } from './googlelike.component';

describe('GooglelikeComponent', () => {
  let component: GooglelikeComponent;
  let fixture: ComponentFixture<GooglelikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglelikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglelikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
