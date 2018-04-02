import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/auth.gard';

const appRoutes: Routes = [
    { path: '', component: UsersComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '' }
];

export const AppRouter = RouterModule.forRoot(appRoutes);