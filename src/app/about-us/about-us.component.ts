import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  constructor(private myService: EmployeeServiceService) {
   // this.message = this.myService.message;
   }
  
  ngOnInit() {
   sessionStorage.setItem('name', "Shilpa");
   localStorage.setItem('surname', "D");
   localStorage.setItem('age', "28");
  }

  printMessage() {
    this.myService.setMessage("Message from AboutUs component....");
  }
}
