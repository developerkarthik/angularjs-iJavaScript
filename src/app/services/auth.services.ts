import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import {map} from 'rxjs/operators';
import { Login } from "../model/login.model";

@Injectable()
export class AuthServices{

    isAuthenticated = new Subject<boolean>();
    constructor(private http: HttpClient){}
    clientUrl: string = 'http://localhost:3000/';

    getCustId(){
        return localStorage.getItem('cust_id');
    }

    checkAuthentication(cust_id: string, password: string){
        var api_url = this.clientUrl+'auth?cust_id='+cust_id+'&password='+password;
        var responseData;
        return this.http.get<Login[]>(api_url).pipe(
            map(data => {
                if(data.length === 1){
                    localStorage.setItem('cust_id', data[0].cust_id);
                    responseData = {
                        success: true,
                        isUserAuthenticated: true,
                        cust_id: data[0].cust_id 
                    }
                }else{
                    responseData = {
                        success: true,
                        isUserAuthenticated: false
                    }
                }
                return responseData;
            })
        );
    }

    logout(){
        localStorage.removeItem('cust_id');
    }
}