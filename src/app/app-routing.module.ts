import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './my-components/home/home.component';
import { AboutComponent } from './my-components/about/about.component';
import { BlogComponent } from './my-components/blog/blog.component';
import { ContactsComponent } from './my-components/contacts/contacts.component';
import { CustomRoutingComponent } from './my-components/custom-routing/custom-routing.component';
import { PagenotfoundComponent } from './my-components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:'home',component:HomeComponent },
  { path:'about',component:AboutComponent },
  { path:'blog',component:BlogComponent  },
  { path:'contact',component:ContactsComponent },
  { path:'custom/:product',component:CustomRoutingComponent },
  { path:'**',component:PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
