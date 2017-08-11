import { ProfileComponent, HomeComponent, InitComponent, LoginComponent } from './components/_index'
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/_index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },

    { path: 'init', component: InitComponent },

    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
