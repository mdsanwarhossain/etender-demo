import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallheaderComponent } from './smallheader.component';

describe('SmallheaderComponent', () => {
  let component: SmallheaderComponent;
  let fixture: ComponentFixture<SmallheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmallheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SmallheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
