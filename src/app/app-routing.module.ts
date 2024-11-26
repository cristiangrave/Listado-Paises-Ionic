import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

/*aqui se conectan nuestros modules es lo primero que debemos de hacer a la hora de crear un nuevo componente */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    /* esteListCountryy es el donde de enlazan ami pagina principal por medio del este archivo routing */
    path: 'list-country',
    loadChildren: () =>
      import('./list-country/list-country.module').then(
        (m) => m.ListCountryPageModule
      ),
  },  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
