import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LawnService } from './services/lawn.service';
import { ViewLawnComponent } from './components/view-lawn/view-lawn.component';
import { ApplicationComponent } from './components/application/application.component';
import { ViewApplicationComponent } from './components/view-application/view-application.component';
import { EditLawnComponent } from './components/edit-lawn/edit-lawn.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { AddLawnComponent } from './components/add-lawn/add-lawn.component';
import { AppApplicationComponent } from './components/app-application/app-application.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewLawnComponent,
    ApplicationComponent,
    ViewApplicationComponent,
    EditLawnComponent,
    EditApplicationComponent,
    AddLawnComponent,
    AppApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LawnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
