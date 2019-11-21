import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

  //... On configure la Page Note
  // locahost/note redirigera vers la page d'accueil
  { path: 'note', redirectTo: 'home', pathMatch: 'full' },

  // locahost/note:id affichera le détail de la note
  { path: 'note/:id', loadChildren: './note/note.module#NotePageModule' },

  // Composants Ionic
  { path: 'composants', loadChildren: './composants/composants.module#ComposantsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
