import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public message: string;

  constructor(private api: ApiService, private router: Router ) { }

  ngOnInit(): void {
  }

  connexion(){
    this.api
    .login(this.username, this.password)
    .subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        return this.router.navigate(['/profile']);
      } else {
        this.username = '';
        this.password = '';
        this.message = 'E-Mail et/ou Mot de Passe Invalide(s)';
      }
    })
  }
}
