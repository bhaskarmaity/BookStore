import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponentComponent } from './book-detail-component.component';

describe('BookDetailComponentComponent', () => {
  let component: BookDetailComponentComponent;
  let fixture: ComponentFixture<BookDetailComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookDetailComponentComponent]
    });
    fixture = TestBed.createComponent(BookDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
