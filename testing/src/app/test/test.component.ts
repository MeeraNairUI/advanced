import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  num1: any=0;
  num2: any=0;
  res1:any =0;
  sum(n:number,n1:number):number{
    this.res1= +n + +n1;
    return this.res1;
  }
}
