import { Transcation } from "./transcation.model";

export interface Teams{
    name: string
}

export class Customer{
    constructor(
        public id: string,
        public name: string,
        public last_login: string,
        public balance: string,
        public transcation: Transcation[],
        public teams: Teams[]
    ){}
}