import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';

describe('MyComponent', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain an h2 element', () => {
    const h2Element = fixture.nativeElement.querySelector('h2');
    expect(h2Element).toBeTruthy();
  });

  it('should contain an unordered list (ul) element', () => {
    const ulElement = fixture.nativeElement.querySelector('ul');
    expect(ulElement).toBeTruthy();
  });

  it('should contain three list item (li) elements', () => {
    const liElements = fixture.nativeElement.querySelectorAll('li');
    expect(liElements.length).toBe(3)
  });
});