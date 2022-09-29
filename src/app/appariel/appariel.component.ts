import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appariel',
  templateUrl: './appariel.component.html',
  styleUrls: ['./appariel.component.scss']
})
export class ApparielComponent implements OnInit {
  @Input() appareilName:String="";
  @Input() appareilSatus:string="";

  constructor() { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilSatus;
  }
  getColor(){
    if(this.appareilSatus=== 'allumé'){
      return 'green';
    }else{
      return 'red';
    }
  }

}
