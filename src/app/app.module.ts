import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroComponent } from './hero.component';
import { HeroService } from './hero.service';

import { RouterModule }   from '@angular/router';

import { DashboardComponent }   from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
    ])
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }