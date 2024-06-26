import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEventComponent } from './news-event.component';

describe('NewsEventComponent', () => {
  let component: NewsEventComponent;
  let fixture: ComponentFixture<NewsEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
