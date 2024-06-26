import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveTenderListComponent } from './live-tender-list.component';

describe('LiveTenderListComponent', () => {
  let component: LiveTenderListComponent;
  let fixture: ComponentFixture<LiveTenderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveTenderListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveTenderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
