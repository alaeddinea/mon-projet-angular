import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
isAuth:boolean=false;
appariel1="machine à lavé";
appariel2="télévision";
appariel3="rodinateur";
constructor(){
  setTimeout(() => {
    this.isAuth=true;
  }, 4000);
}
onAllumer(){
  console.log('on allume tout');
}
}
