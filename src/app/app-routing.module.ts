import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'fontsawesome',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'iconscout',
    loadChildren: () => import('./pages/iconscout/iconscout.module').then( m => m.IconscoutPageModule)
  },
  {
    path: 'fontsawesome',
    loadChildren: () => import('./pages/fontsawesome/fontsawesome.module').then( m => m.FontsawesomePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
