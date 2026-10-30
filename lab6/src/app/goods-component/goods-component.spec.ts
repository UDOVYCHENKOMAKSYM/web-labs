import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoodsComponent } from './goods-component';

describe('GoodsComponent', () => {
  let component: GoodsComponent;
  let fixture: ComponentFixture<GoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoodsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GoodsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
