import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  constructor(private myService: EmployeeServiceService) {
    // this.message = this.myService.message;
    }

  printMessage() {
    this.myService.setMessage("Message from Contactus component....");
    } 
}
