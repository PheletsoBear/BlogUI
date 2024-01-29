import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpostComponent } from './blogpostlist.component';

describe('BlogpostComponent', () => {
  let component: BlogpostComponent;
  let fixture: ComponentFixture<BlogpostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogpostComponent]
    });
    fixture = TestBed.createComponent(BlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
