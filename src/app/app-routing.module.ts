import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewMomentComponent } from './components/pages/sms-sender/sms-sender.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'', component: NewMomentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
