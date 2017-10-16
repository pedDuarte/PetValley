import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {PersonalDataComponent} from './register-user/personal-data/personal-data.component';
import {PersonalQuizComponent} from './register-user/personal-quiz/personal-quiz.component';
import {RegisterSupplyComponent} from './register-supply/register-supply.component';
import {ListUserComponent} from './list-user/list-user.component';
import {ListSupplyComponent} from './list-supply/list-supply.component';
import {RegisterPetComponent} from './register-pet/register-pet.component';
import { ListPetComponent } from './list-pet/list-pet.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'registerUser', component: RegisterUserComponent,
        children: [
            {path: '', redirectTo: 'personalData', pathMatch: 'full'},
            {path: 'personalData', component: PersonalDataComponent},
            {path: 'personalQuiz', component: PersonalQuizComponent}
    ]},
    {path: 'registerSupply', component: RegisterSupplyComponent},
    {path: 'listUser', component: ListUserComponent},
    {path: 'listSupply', component: ListSupplyComponent},
    {path: 'registerPet', component: RegisterPetComponent},
    {path: 'listPet', component: ListPetComponent}
];
