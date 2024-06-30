import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomePipePipe } from './custome-pipe.pipe';
import { TotalElementPipe } from './total-element.pipe';
import { EmployeeServiceService } from './employee-service.service';
import { FooterComponent } from './Layout/footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  @ViewChild(FooterComponent)
  childComponent: FooterComponent = new FooterComponent;

  parentVar: string = "test parent child";
  messageP: string = "";
  title = 'NewApp'
  Age: number = 25;
  Name: string = "shilpa";
  LastName: string = "Dangi";
  flag: any = null;
  arr: number[] = [1,12,3,11,23,43,56,88];
  department: any[] = [1,2,3,4,5,6,7,8,9,10];
  todayDate: any = new Date("12-12-2020");
  valueToCredit: any = 25;
message: any;
  user: any=[
{
name: 'abc',
age: 26,
address: 'mumbai'
},
{
name: 'xyz',
age: 27,
address: 'pune'
}
]

  employee:any=[
    { 
    name:'hemant',
    lastName:'T',
    age:24,
    email:'test@gmail.com'},
  {
    name:'Shilpa',
    lastName:'D',
    age:26,
    email:'aaa@gmail.com'
  },
  {
  name:'Suman',
  age:27,
  email:'sss@gmail.com'},
 { 
  name:'Rajeev',
  age:28,
  email:'aaa@gmail.com'},
];
    
constructor(public myService: EmployeeServiceService) {
  
 }

ngOnInit() {

  console.log("message from service", this.myService.getMessage());
  console.log(typeof(this.Age))
  console.log(typeof(this.Name))
  console.log(typeof(this.flag))
  console.log(typeof(this.arr))

  this.employee.forEach((element:any) => {
    console.log("employee details is ", element);
  });
  console.log("Employee:: ", this.employee);

  var isNameFlag= this.employee.filter((val: any)=> {
    if(val.name == "hemant") {
      return true;
    }
    else {
      return false;
    }
  })
  console.log("Is employee is Hemant::", isNameFlag);

  var isName= this.arr.map((val: any)=> 
    val*2
  )
console.log("multiple by 2 :: ", isName);

for (let index = 0; index < this.employee.length; index++) {
  const element = this.employee[index];
  console.log("test forloop:: ",element.age);
}

this.sum();



setTimeout(() => {
  console.log("This statment executed after 1 sec.")
}, 1000);

setInterval(() => {

 var name = sessionStorage.getItem('name');
 var surname = localStorage.getItem('surname');
if (name != null) {
  console.log("print name :: ", name);
  sessionStorage.removeItem('name');
  //sessionStorage.clear();
}
if(surname !=null) {
  console.log("local storage ::", surname);
  localStorage.getItem('age');
  localStorage.removeItem('surname');
 
}
}, 1000);
}

sum() {
  let i: any=0;
this.department.forEach(element => { 
  i= i+element;
  
});

console.log("sum:", (i))

let total = this.department.reduce((a,b) => (a+b));
console.log("Total: ", total);
}

handleClick() {
  this.flag = !this.flag;
  
}

receiveMessage($event: any) {
  this.messageP = $event;
}

dispalyAlertMsg() {
  this.childComponent.msgAlert();
}

}