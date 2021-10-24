import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-section',
  templateUrl: './binding-section.component.html',
  styleUrls: ['./binding-section.component.css']
})
export class BindingSectionComponent implements OnInit {

  binding: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
