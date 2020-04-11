import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'firstpage',
    loadChildren: () => import('./firstpage/firstpage.module').then( m => m.FirstpagePageModule)
  },
  {
    path: 'firstpage/:userName',
    loadChildren: () => import('./firstpage/firstpage.module').then( m => m.FirstpagePageModule)
  },
  {
    path: 'additem',
    loadChildren: () => import('./additem/additem.module').then( m => m.AdditemPageModule)
  },
  {
    path: 'itempage',
    loadChildren: () => import('./itempage/itempage.module').then( m => m.ItempagePageModule)
  },
  {
    path: 'edititem',
    loadChildren: () => import('./edititem/edititem.module').then( m => m.EdititemPageModule)
  },
  {
    path: 'chartpage',
    loadChildren: () => import('./chartpage/chartpage.module').then( m => m.ChartpagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
