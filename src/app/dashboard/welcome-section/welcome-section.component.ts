import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome-section.component.html',
  styleUrls: ['./welcome-section.component.css']
})
export class WelcomeSectionComponent implements OnInit {

  @Input() name !: string;
  @Input() last_login !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
