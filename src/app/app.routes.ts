import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
  },
  {
    path: 'subjects',
    loadComponent: () => import('./features/subjects/subjects.component').then(m => m.SubjectsComponent),
  },
  {
    path: 'resources',
    loadComponent: () => import('./features/resources/resources.component').then(m => m.ResourcesComponent),
  },
  {
    path: 'activities',
    loadComponent: () => import('./features/activities/activities.component').then(m => m.ActivitiesComponent),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
