import { HomeComponent, LoginComponent } from './components/_index'
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/_index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
