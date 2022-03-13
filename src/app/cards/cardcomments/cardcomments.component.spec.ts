import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardcommentsComponent } from './cardcomments.component';

describe('CardcommentsComponent', () => {
  let component: CardcommentsComponent;
  let fixture: ComponentFixture<CardcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
