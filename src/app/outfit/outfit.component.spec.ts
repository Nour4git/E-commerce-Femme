import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutfitComponent } from './outfit.component';

describe('OutfitComponent', () => {
  let component: OutfitComponent;
  let fixture: ComponentFixture<OutfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutfitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
