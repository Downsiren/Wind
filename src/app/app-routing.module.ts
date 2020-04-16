/*
 * @Description: 
 * @Author: zhangxin
 * @Date: 2020-03-31 20:53:43
 * @LastEditTime: 2020-04-10 12:23:20
 * @LastEditors: zhangxin
 */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'cover', pathMatch: 'full' },
  { path: 'cover', loadChildren: () => import('./page/cover/cover.module').then( m => m.CoverStartModule)},
  { path: 'index', loadChildren: () => import('./page/index/index.module').then( m => m.IndexPageModule)},
  { path: 'config', loadChildren: () => import('./page/config-comm/config-comm.module').then( m => m.ConfigPageModule)},
  { path: 'professional', loadChildren: () => import('./page/professional/professional.module').then( m => m.ProfessionalPageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
