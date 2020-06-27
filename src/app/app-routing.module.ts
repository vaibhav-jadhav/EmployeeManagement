import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { DetailsComponent } from './details/details.component';
import { MiddleComponentComponent } from './middle-component/middle-component.component';
import { MainPageComponent } from './main-page/main-page.component';
const routes: Routes = [
  { path: 'listing-page', component: ListingPageComponent },
  { path : 'details', component: DetailsComponent},
  { path : 'login' , component:MiddleComponentComponent},
  {path : 'main-page', component:MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule
 { 

}
