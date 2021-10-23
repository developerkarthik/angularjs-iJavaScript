import { Component, Input, OnInit } from '@angular/core';
import { Transcation } from 'src/app/model/transcation.model';

@Component({
  selector: 'app-balance-section',
  templateUrl: './balance-section.component.html',
  styleUrls: ['./balance-section.component.css']
})
export class BalanceSectionComponent implements OnInit {

  @Input() balance: any;
  @Input() transcation: Transcation[];

  constructor() { }

  ngOnInit(): void {
  }

}
