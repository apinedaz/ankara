import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { EditorsComponent } from './components/editors/editors.component';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path:'home', component:HomeComponent },
    { path: 'contact', component:ContactComponent },
    { path: 'editors', component:EditorsComponent },
    { path: 'user', component:UserComponent },
    { path: 'users', component:UsersComponent}
];
