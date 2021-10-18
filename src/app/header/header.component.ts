import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  js_framework: string = "Angular Js";
  heading: string = "iJavaScript";
  constructor() { }

  ngOnInit(): void {
  }

}
