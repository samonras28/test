import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import {AuthComponent} from './theme/layout/auth/auth.component';
import { ProfileComponent } from '../app/components/profile/profile.component';
import { ProductDetailComponent } from './components/productDetail/productDetail.component';
import { NewModuleComponent } from './new-module/new-module.component';
import { UidemoComponent } from './components/uidemo/uidemo.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'profile', 
        component:ProfileComponent
      },
      {
        path: 'productdetail', 
        component:ProductDetailComponent
      },
      {
        path: 'test', 
        component:NewModuleComponent
      },
      {
        path: 'demo', 
        component:UidemoComponent
      },
      {
        path: '',
        redirectTo: 'sample-page',
        pathMatch: 'full'
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/pages/sample-page/sample-page.module').then(module => module.SamplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
