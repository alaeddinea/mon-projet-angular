import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appariel',
  templateUrl: './appariel.component.html',
  styleUrls: ['./appariel.component.scss']
})
export class ApparielComponent implements OnInit {
  @Input() appareilName:String="";
  appareilSatus:string="étient";

  constructor() { }

  ngOnInit(): void {
  }
  getStatus(){
    return this.appareilSatus;
  }

}
