import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  private isButtonVisible = true;
  title = 'EmployeeManagement';
  public name = " vaibhav";



  public defaultID="vaibhav.jadhav.csm@gmail.com";
  public defaultPass="root";



  public Email;
  public Password;
  private count=0;
  shouldComponentUpdate = () => true
  constructor(private router: Router) 
  { 
     
    // this.router.navigate(['/listing-page']);
    //  this.isButtonVisible = true;
  }

  ngOnInit()
   {
  }
  clickFunction()
  {
    alert("clicked",);
    if(this.Email==this.defaultID && this.Password==this.defaultPass)
    { 
      this.isButtonVisible=false;
      this.router.navigate(['/listing-page']);
    }
   
  }

}
