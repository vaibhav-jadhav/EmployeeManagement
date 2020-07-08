import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  rows = 
    {
      "details":"vaibhav.jadhav.csm@gmail.com",
      "name":"vaibhav jadhav",
    };
  constructor()
   {
    alert(localStorage.getItem('status'))
    }

  ngOnInit() {
  }

}
