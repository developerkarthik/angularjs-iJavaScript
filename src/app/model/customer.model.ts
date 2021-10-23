import { Transcation } from "./transcation.model";

export class Customer{
    constructor(
        public id: string,
        public name: string,
        public last_login: string,
        public balance: string,
        public transcation: Transcation[]
    ){}
}