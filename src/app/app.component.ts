import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
isAuth:boolean=false;
appareils=[{
  name: 'Ordinateur' ,
  status : 'allumé'
},
{
  name: 'Télévision',
  status :'allumé'
},
{
  name: "Machine à lavé",
  status : 'étient'
}
];


constructor(){
  setTimeout(() => {
    this.isAuth=true;
  }, 4000);
}
onAllumer(){
  console.log('on allume tout');
}
}
