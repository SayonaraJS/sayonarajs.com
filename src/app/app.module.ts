import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


//Material Design
//https://github.com/jelbourn/material2-app
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { SayonaraErrorComponent } from './components/sayonara-error/sayonara-error.component';
import { SafeHtmlPipe } from './pipes/safe-html/safe-html.pipe';
import { EntryTypeComponent } from './components/entry-type/entry-type.component';
import { EntryComponent } from './components/entry/entry.component';

//Declare our routes
//https://angular.io/docs/ts/latest/guide/router.html
const appRoutes: Routes = [
  { path: 'page/:pageTitle', component: PageComponent },
  { path: 'page/:pageTitle/type/:entryTypeTitle', component: EntryTypeComponent },
  { path: 'page/:pageTitle/type/:entryTypeTitle/entry/:entryTitle', component: EntryComponent },
  { path: '**',   redirectTo: 'page/notfound' },
];
// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: '**', component: PageNotFoundComponent }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    SayonaraErrorComponent,
    SafeHtmlPipe,
    EntryTypeComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    MaterialModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
