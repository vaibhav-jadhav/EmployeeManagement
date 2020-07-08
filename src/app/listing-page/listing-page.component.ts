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
  headers = ["Email ID", "Full Name", "Emp ID", "Joining Date", "Rating", "Dept."];
  filterflag1=false;
  filterflag2=false;
  data_rows = [
    {
      "Email ID":"vaibhav.jadhav.csm@gmail.com",
      "Full Name":"vaibhav jadhav",
      "Emp ID":"1",
      "Joining Date":"2020/1/1",
      "Rating":"9",
      "Dept." : "HR"
    },
    {
      "Email ID":"dummy2@xyz.com",
      "Full Name":"mixit dd",
      "Emp ID":"2",
      "Joining Date":"2020/1/4",
      "Rating":"6",
      "Dept." : "Marketing"
    },
    
    {
      "Email ID":"blackfox@dummy.com",
      "Full Name":"chand cc",
      "Emp ID":"19",
      "Joining Date":"2020/1/3",
      "Rating":"8",
      "Dept." : "HR"
    },
    {
      "Email ID":"vaibh@gmail.com",
      "Full Name":"chandu bb",
      "Emp ID":"12",
      "Joining Date":"2020/1/2",
      "Rating":"5",
      "Dept." : "Marketing"
    },
    
  ];
  rows=[];
  constructor(private router: Router) 
  {
    this.rows=this.data_rows;
   }

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
     for (let j = 0; j < l; j++)
        {
            if(( record[i]['Full Name'] > record[j]['Full Name']))
            {
              
                  let temp=record[i];
                  record[i]=record[j];
                  record[j]=temp;
            }
        }
     }
     this.rows=record;
     this.rows.reverse();
  }
ByRating()
{
  alert(" in rating")
  let record=this.rows;
  let l=record.length;
 for (let i = 0; i < l; i++)
  {
   for (let j = 0; j < l; j++)
      {
          if(record[i]['Rating'] < record[j]['Rating'])
          {
                let temp=record[i];
                record[i]=record[j];
                record[j]=temp;
          }
      }
   }
   console.log(record)
  //  this.rows=record;
}
ByDate()
{
  alert(" in date")
  let record=this.data_rows;
  let l=record.length;
 for (let i = 0; i < l; i++)
  {
   for (let j = 0; j < l; j++)
      {
          let d1=new Date(record[i]['Joining Date']);
          let d2=new Date(record[j]['Joining Date']);
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
   this.rows=record;
}
onKey(event:any) { // without type info
  let record=this.data_rows;
  let tempRecord=[];
    let l=record.length;
   for (let i = 0; i < l; i++)
    {
     
            if(( record[i]['Full Name']).includes(event.target.value))
            {
              tempRecord.push(record[i]); 
              // console.log(record[i]['Full Name']);    
            }
        
     }
     this.rows=tempRecord;
}

yourfunc(e,id) {
  if(e.target.checked)
  {
    if(id == "1")
    {
      this.filterflag1=true;
         
    }
    if(id == "2")
    {
      this.filterflag2=true;
        
    }
           
  }
  else
  {
    if(id == "1")
    {
      this.filterflag1=false;
          
    }
    if(id == "2")
    {
      this.filterflag2=false;
          
    }
  }
  
  this.FilterData();
}

Add()
{
  alert("you are not Admin")
}
reload()
{
  // this.rows=this.data_rows;
}
FilterData()
{
  let record=this.rows;
  let tempRecord=[];
    let l=record.length;
   for (let i = 0; i < l; i++)
    {
     for (let j = 0; i < l; i++)
        {
          if(this.filterflag1 == true )
          {
              if(record[i]['Dept.'] == "HR")
              {
                tempRecord.push(record[i]);
              }
          }
          if(this.filterflag2 == true)
          {
            if(record[i]['Dept.'] == "Marketing")
            {
              tempRecord.push(record[i]);
            }
          }
          if(this.filterflag1 == false && this.filterflag2 == false) 
          {
            tempRecord.push(record[i]);
          }
        }
     }
     this.rows=tempRecord;


}

}






