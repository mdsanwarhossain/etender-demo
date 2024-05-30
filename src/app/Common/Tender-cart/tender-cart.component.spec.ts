import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderCartComponent } from './tender-cart.component';

describe('TenderCartComponent', () => {
  let component: TenderCartComponent;
  let fixture: ComponentFixture<TenderCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TenderCartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TenderCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
