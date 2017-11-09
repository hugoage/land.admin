
import { ModuleWithProviders }  from '@angular/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { CatalogsComponent } from './catalogs/catalogs.component';

// Route Configuration
export const routes: Routes = [
  {
     path: 'catalogs', redirectTo: '/catalogs' },
  { 
    path: '',
  redirectTo: '',
  pathMatch: 'full'
},
 
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

const ROUTES: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, { useHash: false, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutesModule { }