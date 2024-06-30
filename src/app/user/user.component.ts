import { Component } from '@angular/core';
import { EmployeeAppComponent } from '../employee-app/employee-app.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [EmployeeAppComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
