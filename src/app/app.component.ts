import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { MiddleComponentComponent } from './middle-component/middle-component.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
  title = 'EmployeeManagement';
  public name = " vaibhav";
  public status:string;

  
  public defaultID="vaibhav.jadhav.csm@gmail.com";
  public defaultPass="root";



  public Email;
  public Password;
  private isButtonVisible = true;
  private count=0;
  shouldComponentUpdate = () => false;
  constructor(private router: Router) 
  { 

    alert("alert"+localStorage.getItem('status'));
    if(localStorage.getItem('status')=="logout")
    {
      this.status="login";
      this.router.navigate(['/login']);
    }
    if(localStorage.getItem('status')=="login")
    {
      this.status="logout";
      this.router.navigate(['/listing-page']);
    }
  }
  
  ngOnDestroy() {
     this.isButtonVisible = false;
            
}
 
   
  
  ngOnChanges() 
  {
    alert("change");
    // code goes here...
  }
  clickFunction3()
  {
    localStorage.setItem('status', 'logout');
    this.router.navigate(['/login']);
  }   
  clickFunction1()
  {
    alert("menu");
  
    if(localStorage.getItem('status')=="logout")
    {
      this.router.navigate(['/login']);
    }
    if(localStorage.getItem('status')=="login")
    {
        this.router.navigate(['/listing-page']);
    }

  }
  
  ngDoCheck(){
    if(localStorage.getItem('status')=="logout")
    {
      this.status="login";
    }
    if(localStorage.getItem('status')=="login")
    {
      this.status="logout";
    }
  }
  
}
