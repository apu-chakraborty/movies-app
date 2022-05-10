import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Flixlaar';
  loader = true;


  ngOnInit(): void {
    setTimeout(() => this.loader = false, 3000)

  }
}
