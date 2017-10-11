import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroComponent } from './hero.component';

import { RouterModule , Routes}   from '@angular/router';

import { DashboardComponent }   from './dashboard.component';

const routes : Routes = [
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
  ];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
    ],
    exports : [
        RouterModule
    ]
  
})


export class AppRoutingModule { }
