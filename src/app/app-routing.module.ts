import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LocationComponent } from './location/location.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'AboutUs',component:AboutUsComponent
  },
  {
    path: 'ContactUs',component:ContactUsComponent
  },
  {
    path: 'Location',component:LocationComponent
  },
  {
    path: 'user',component:UserComponent
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }