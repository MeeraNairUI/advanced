import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentchildapp';
  enterName = "Meera";
  enterPhoneNo = "9188457659";
  enterAge = "23";
  parentData="";
  phone="";
  age="";
  text="";

  transferData(){
    this.parentData=this.enterName;
    this.phone = this.enterPhoneNo;
    this.age = this.enterAge;
    // this.text = this.enterText;
  }
  value="";
  sendData(value:string){
    this.value=value;
  }
}
