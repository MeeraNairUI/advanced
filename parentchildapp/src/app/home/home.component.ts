import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
@Input()
parentData!: string;
@Input()
age !:string;
@Input()
phone !: string;
@Input()
text !: string;
}
