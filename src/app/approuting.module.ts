import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { TeamComponent } from "./team/team.component";

const routes: Routes = [
    {
        path:'' , 
        component: LoginComponent 
    },
    {
        path:'dashboard',
        component: DashboardComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'team',
        component: TeamComponent
    }

]
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class appRoutingModule{
    constructor(){}
}