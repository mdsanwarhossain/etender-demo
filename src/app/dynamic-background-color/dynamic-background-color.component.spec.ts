import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicBackgroundColorComponent } from './dynamic-background-color.component';

describe('DynamicBackgroundColorComponent', () => {
  let component: DynamicBackgroundColorComponent;
  let fixture: ComponentFixture<DynamicBackgroundColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicBackgroundColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicBackgroundColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
