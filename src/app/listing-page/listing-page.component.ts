import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.css']
})
export class ListingPageComponent implements OnInit 
{

  
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // headers = ["ID", "Name", "Age", "Gender", "Country"];
  view:string="vaibhav.jadhav.csm@gmail.com";
  headers = ["Email ID", "Full Name", "Emp ID", "Joining Date", "Rating"];
  rows = [
    {
      "Email ID":"vaibhav.jadhav.csm@gmail.com",
      "Full Name":"vaibhav jadhav",
      "Emp ID":"1",
      "Joining Date":"2020/1/1",
      "Rating":"9"
    },
    {
      "Email ID":"dummy2@xyz.com",
      "Full Name":"mixit dd",
      "Emp ID":"2",
      "Joining Date":"2020/1/4",
      "Rating":"101"
    },
    {
      "Email ID":"blackfox@dummy.com",
      "Full Name":"chand cc",
      "Emp ID":"2",
      "Joining Date":"2020/1/3",
      "Rating":"8"
    },
    {
      "Email ID":"vaibh@gmail.com",
      "Full Name":"bala bb",
      "Emp ID":"12",
      "Joining Date":"2020/1/2",
      "Rating":"5"
    },
    
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  
  }
  View(val)
  {
    alert(val+"jamtay");
    this.router.navigate(['/details']);
  }
  Sort(type)
  {
        if(type=='rating')
        {
            
            this.ByRating(); 
        }
        if(type=='name')
        {
          alert("lets go with name");
          this.ByName();
        }
        if(type=='date')
        {
          alert("lets go with date");
          this.ByDate();
        }
  }
  ByName()
  {
    alert(" in Date")
    let record=this.rows;
    let l=record.length;
   for (let i = 0; i < l; i++)
    {
     for (let j = 0; i < l; i++)
        {
            if(( record[i]['Full Name'] > record[j]['Full Name']))
            {
              
                  let temp=record[i];
                  record[i]=record[j];
                  record[j]=temp;
            }
        }
     }
     this.rows=record
     this.rows.reverse();
  }
ByRating()
{
  alert(" in rating")
  let record=this.rows;
  let l=record.length;
 for (let i = 0; i < l; i++)
  {
   for (let j = 0; i < l; i++)
      {
          if(record[i]['Rating'] < record[j]['Rating'])
          {
                let temp=record[i];
                record[i]=record[j];
                record[j]=temp;
          }
      }
   }
   this.rows=record
}
ByDate()
{
  alert(" in date")
  let record=this.rows;
  let l=record.length;
 for (let i = 0; i < l; i++)
  {
   for (let j = 0; j < l; j++)
      {
          let d1=new Date(record[i]['Rating']);
          let d2=new Date(record[j]['Rating']);
          console.log(d1.toDateString());
          console.log(d2.toDateString());
         if (d1>d2)
          {
                let temp=record[i];
                record[i]=record[j];
                record[j]=temp;
          }
      }
   }
   this.rows=record
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
  sortByname(r)
  {
    let record=r
    let l=record.length;
    for (let i = 0; i < l; i++)
     {
      for (let j = 0; i < l; i++)
      {
       if(record[i]['Rating'] < record[j]['Rating'])
       {
            let temp=record[i];
            record[i]=record[j];
            record[j]=temp;
       }
   }
  }
  return record;
}


}



