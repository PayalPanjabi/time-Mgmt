import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'get-otp',
    loadChildren: () => import('./pages/get-otp/get-otp.module').then( m => m.GetOTPPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./pages/registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'daily-routine',
    loadChildren: () => import('./pages/daily-routine/daily-routine.module').then( m => m.DailyRoutinePageModule)
  },
  {
    path: 'finance',
    loadChildren: () => import('./pages/finance/finance.module').then( m => m.FinancePageModule)
  },
  {
    path: 'to-do-list',
    loadChildren: () => import('./pages/to-do-list/to-do-list.module').then( m => m.ToDoListPageModule)
  },
  {
    path: 'health',
    loadChildren: () => import('./pages/health/health.module').then( m => m.HealthPageModule)
  },
  {
    path: 'celebration',
    loadChildren: () => import('./pages/celebration/celebration.module').then( m => m.CelebrationPageModule)
  },
  {
    path: 'review',
    loadChildren: () => import('./pages/review/review.module').then( m => m.ReviewPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./pages/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'social-media',
    loadChildren: () => import('./pages/social-media/social-media.module').then( m => m.SocialMediaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
