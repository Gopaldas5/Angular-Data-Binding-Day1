import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstProject';
  imgUrl = "./assets/BL_logo_square_png.png";
  url ="https://www.bridgelabz.com";
  userName:string="";
  nameError:string="";

  ngOnInit(): void{
    this.title="Hello From BridgeLabz"
  }

  onClick($event:any){
    console.log("Save button is clicked!", $event);
    window.open(this.url,"_blank");
  }

  onInput($event:any){
    console.log("Change event Occured",$event.data);
    const nameRegex = RegExp("^[A-Z][a-zA-Z]{2,25}$");
    if(nameRegex.test(this.userName)){
      this.nameError="Name is correct";
      return;
    }
    this.nameError="Name is incorrect"
  }
}
