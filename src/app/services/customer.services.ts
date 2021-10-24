import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Customer } from "../model/customer.model";

@Injectable()
export class CustomerServices{
    constructor(private http: HttpClient){}
    clientUrl: string = 'http://localhost:3000/';
    
    getCustomerById(cust_id: string){
        var api_url = this.clientUrl+'customers?id='+cust_id;
        return this.http.get<Customer[]>(api_url).pipe(
            map(data => {
                return data[0];
            })
        );
    }
    getTeamsById(cust_id: string){
        var api_url = this.clientUrl+'customers?id='+cust_id;
        return this.http.get<Customer[]>(api_url).pipe(
            map(data => {
                return data[0].teams;
            })
        )
    }
}