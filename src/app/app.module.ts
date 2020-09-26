import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { CadastroComponent } from './user/cadastro/cadastro.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { CreateEventsComponent } from './events/create-events/create-events.component';
import { ItemEventsComponent } from './events/item-events/item-events.component';
import { EditEventsComponent } from './events/edit-events/edit-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HeaderComponent,
    EventsComponent,
    CreateEventsComponent,
    ItemEventsComponent,
    EditEventsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [HttpClient, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
