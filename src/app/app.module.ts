import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule,HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/user/login/login.component';
import { CadastroComponent } from './pages/user/cadastro/cadastro.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { HeaderComponent } from './components/header/header.component';
import { EventsComponent } from './pages/events/events.component';
import { CreateEventsComponent } from './pages/events/create-events/create-events.component';
import { ItemEventsComponent } from './pages/events/item-events/item-events.component';
import { EditEventsComponent } from './pages/events/edit-events/edit-events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDialogModule} from '@angular/material/dialog';
import { ListUsersInvitedComponent } from './pages/events/list-users-invited/list-users-invited.component';
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
    ListUsersInvitedComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule
  ],
  providers: [HttpClient, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
