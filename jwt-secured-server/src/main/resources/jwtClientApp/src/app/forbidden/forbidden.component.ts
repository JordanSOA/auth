import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  public cheminImage:any = "/assets/img/forbidden.gif";

  constructor() { }

  ngOnInit(): void {
  }

}
