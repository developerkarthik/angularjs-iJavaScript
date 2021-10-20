import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from '../services/auth.services';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthServices, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
