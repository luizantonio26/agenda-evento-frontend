import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { CreateEventsComponent } from './pages/events/create-events/create-events.component';
import { EditEventsComponent } from './pages/events/edit-events/edit-events.component';
import { EventsComponent } from './pages/events/events.component';
import { CadastroComponent } from './pages/user/cadastro/cadastro.component';
import { LoginComponent } from './pages/user/login/login.component';

const routes: Routes = [
  {path:"", component:EventsComponent, canActivate: [CanActivateRouteGuard]},
  {path:"newEvent",component:CreateEventsComponent, canActivate: [CanActivateRouteGuard]},
  {path:"editEvent",component:EditEventsComponent, canActivate: [CanActivateRouteGuard]},
  {path:"login", component:LoginComponent},
  {path:"cadastro", component:CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
