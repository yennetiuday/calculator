import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DivisionCalculatorComponent } from './division-calculator.component';

describe('DivisionCalculatorComponent', () => {
  let component: DivisionCalculatorComponent;
  let fixture: ComponentFixture<DivisionCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivisionCalculatorComponent ],
      imports: [FormsModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivisionCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initially hide the result', () => {
    expect(component.showResult).toBe(false);
  });

  it('should hide the result when one or both inputs are invalid', () => {
    component.inputValue1 = 10;
    component.inputValue2 = null;
    component.calculateDivision();
    expect(component.showResult).toBe(false);

    component.inputValue1 = null;
    component.inputValue2 = 5;
    component.calculateDivision();
    expect(component.showResult).toBe(false);

    component.inputValue1 = 10;
    component.inputValue2 = 0;
    component.calculateDivision();
    expect(component.showResult).toBe(false);
  });

  it('should calculate and show the result when both inputs are valid', () => {
    component.inputValue1 = 10;
    component.inputValue2 = 2;
    component.calculateDivision();
    expect(component.showResult).toBe(true);
    expect(component.result).toBe(5);
  });
});
