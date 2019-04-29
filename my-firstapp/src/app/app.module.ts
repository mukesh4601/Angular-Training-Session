import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { Route } from '@angular/compiler/src/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'/', component : HomeComponent},
  {path:'/aboutus', component : AboutusComponent},
  {path:'/contactus', component : ContactusComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    FormsModule,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
