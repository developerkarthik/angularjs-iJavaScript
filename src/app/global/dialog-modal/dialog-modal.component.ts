import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})
export class DialogModalComponent implements OnInit {

  @Input() subscribeValue !: {sms:boolean, newsletter: boolean, flyers: boolean};
  @Input() model: boolean = false;
  @Output() modalClosed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    
  }

  modalClose(){
    this.modalClosed.emit();
  }

}
