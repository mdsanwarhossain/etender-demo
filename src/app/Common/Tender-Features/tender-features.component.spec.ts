import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderFeaturesComponent } from './tender-features.component';

describe('TenderFeaturesComponent', () => {
  let component: TenderFeaturesComponent;
  let fixture: ComponentFixture<TenderFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenderFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
