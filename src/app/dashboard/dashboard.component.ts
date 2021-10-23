import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer.model';
import { AuthServices } from '../services/auth.services';
import { CustomerServices } from '../services/customer.services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [
    CustomerServices
  ]
})
export class DashboardComponent implements OnInit {

  customerData: Customer;

  constructor(
    private customerServices: CustomerServices,
    private authServices: AuthServices
    ) { }

  ngOnInit(): void {
    let cust_id = this.authServices.getCustId();
    this.customerServices.getCustomerById(cust_id).subscribe(data => {
      this.customerData = data;
    });
  }

}
