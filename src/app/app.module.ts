import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';
import { HeroService } from './hero.service';
import { DashboardComponent }   from './dashboard.component';
import { HeroHardcodeService }   from './hero-hardcode.service';
import { TestPipeComponent }   from './test-pipe.component';
import { ExponentialStrengthPipe }   from './test-pipe-pow.pipe';

import { AppRoutingModule }   from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { UnlessDirective, HighlightDirective }  from './unless.directive';
import { HeroFormComponent} from "./form/hero-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    DashboardComponent,
    TestPipeComponent,
    ExponentialStrengthPipe,
    UnlessDirective,
    HighlightDirective,
    HeroFormComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    HeroService,
    HeroHardcodeService
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
