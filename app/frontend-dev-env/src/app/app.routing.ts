import { ProfileComponent } from './components/_index'
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: 'profile', component: ProfileComponent},
    // {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},

    // {path: 'login', component: StartComponent},

    {path: '**', redirectTo: 'profile'}
];

export const routing = RouterModule.forRoot(appRoutes);
