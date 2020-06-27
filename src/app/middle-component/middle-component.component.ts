import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-middle-component',
  templateUrl: './middle-component.component.html',
  styleUrls: ['./middle-component.component.css']
})
export class MiddleComponentComponent implements OnInit {
  private isButtonVisible = true;
  title = 'EmployeeManagement';
  public name = " vaibhav";
  public defaultID="vaibhav.jadhav.csm@gmail.com";
  public defaultPass="root";
  public Email;
  public Password;
  private count=0;
  shouldComponentUpdate = () => false;
  constructor(private router: Router) 
  { 
     
    if(localStorage.getItem('status')=="login")
    {
      this.isButtonVisible=false;
    }
    if(localStorage.getItem('status')=="logout")
    {
      this.isButtonVisible=true;
    }
  }
  ngOnInit() 
  {
    console.log('ngOnInit');
    // this.isButtonVisible=false;
    // this.router.navigate(['/login']);
  }
  clickFunction()
  {
    alert("clicked",);
    if(this.Email==this.defaultID && this.Password==this.defaultPass)
    { 
      this.isButtonVisible=false;
      localStorage.setItem('status', 'login');
      
      this.router.navigate(['/listing-page']);
    }
   
  }
  ngOnChanges(){
    console.log('ngOnChanges');
  }
  ngDoCheck(){
    console.log('ngDoCheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(){
    console.log('ngOnDestory');
  }
  
}
