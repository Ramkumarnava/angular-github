import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: './components/repos/repos.module#ReposModule' }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: false });

