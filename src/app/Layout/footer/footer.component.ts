import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  @Output() messageEvent = new EventEmitter<string>();

  sentMsgToParent() {
    var msg ="message from footer/child component..";
    this.messageEvent.emit(msg);
  }

  msgAlert() {
 alert("alert this message from footer");
  }
}
