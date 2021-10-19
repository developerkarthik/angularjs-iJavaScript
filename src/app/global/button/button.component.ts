import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() buttonType: any;
  @Input() btnClass: any;
  @Input() buttonText: any;
  constructor() { }

  ngOnInit(): void {
  }

}
