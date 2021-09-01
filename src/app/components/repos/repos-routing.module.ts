import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos.component';

const routes: Routes = [
    { path: '', component: ReposComponent }
];

export const ReposRoutes = RouterModule.forChild(routes);
