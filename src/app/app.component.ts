import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
  template: `
  <h1>
    {{title}}!
  </h1>
    <nav>
      <a routerLink="/dashboard">Dashboard</a>
      <a routerLink="/heroes">Heroes</a>
    </nav>
  <router-outlet></router-outlet>
`,

})

export class AppComponent  {

  title : string ;
  constructor(){
	  this.title = 'Tour of Heros';
  }
}






