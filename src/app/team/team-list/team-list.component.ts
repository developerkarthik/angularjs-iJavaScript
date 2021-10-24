import { Component, Input, OnInit } from '@angular/core';
import { Teams } from 'src/app/model/customer.model';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() teamsData !: Teams[];

  constructor() { }

  ngOnInit(): void {
  }

}
