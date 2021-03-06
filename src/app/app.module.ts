import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { CountryComponent } from './components/country/country.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardComponent } from './components/card/card.component';

const appRoutes: Routes = [
  {path: '', component: UserComponent},
  {path: 'about', component: AboutComponent},
  {path: 'country', component: CountryComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    TopNavComponent,
    CountryComponent,
    ProfileComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
