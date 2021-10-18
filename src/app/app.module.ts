import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { WelcomeSectionComponent } from './dashboard/welcome-section/welcome-section.component';
import { BalanceSectionComponent } from './dashboard/balance-section/balance-section.component';
import { SubscribeSectionComponent } from './dashboard/subscribe-section/subscribe-section.component';
import { BindingSectionComponent } from './dashboard/binding-section/binding-section.component';
import { ButtonComponent } from './global/button/button.component';
import { DialogModalComponent } from './global/dialog-modal/dialog-modal.component';
import { appRoutingModule } from './approuting.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    NavigationComponent,
    DashboardComponent,
    AboutComponent,
    TeamComponent,
    WelcomeSectionComponent,
    BalanceSectionComponent,
    SubscribeSectionComponent,
    BindingSectionComponent,
    ButtonComponent,
    DialogModalComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
