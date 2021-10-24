import { Component, OnInit } from '@angular/core';
import { Teams } from '../model/customer.model';
import { AuthServices } from '../services/auth.services';
import { CustomerServices } from '../services/customer.services';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams !: Teams[];

  constructor(private authService: AuthServices, private customerService: CustomerServices) { }

  ngOnInit(): void {
    let cust_id = this.authService.getCustId();
    if(cust_id){
      this.customerService.getTeamsById(cust_id).subscribe(data => {
        this.teams = data;
      })
    }
  }

}
