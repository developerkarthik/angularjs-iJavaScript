import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-subscribe-section',
  templateUrl: './subscribe-section.component.html',
  styleUrls: ['./subscribe-section.component.css']
})
export class SubscribeSectionComponent implements OnInit {
  
  model: boolean = false;
  subscribes: any;

  sForm = new FormGroup(
    {
      'subscribe' : new FormArray([
        new FormGroup({
          'sms': new FormControl(false),
          'newsletter': new FormControl(false),
          'flyers': new FormControl(false)
        })
      ])
    }
  )

  constructor() { }

  ngOnInit(): void {
    
  }

  subscribe(){
    this.subscribes = this.sForm.get('subscribe')?.value[0];
    this.model = true;
  }
  modalClose(){
    this.model = false;
  }
}
