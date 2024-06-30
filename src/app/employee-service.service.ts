import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  message: any="";
  constructor() { }
getMessage() {
  return this.message;
}

setMessage(newMsg: string) {
  this.message = newMsg;
}
}
