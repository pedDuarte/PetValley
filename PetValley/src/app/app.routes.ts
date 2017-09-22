import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterUserComponent} from './register-user/register-user.component';
import {PersonalDataComponent} from './register-user/personal-data/personal-data.component';
import {PersonalQuizComponent} from './register-user/personal-quiz/personal-quiz.component';

export const ROUTES: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'registerUser', component: RegisterUserComponent,
        children: [
            {path: '', redirectTo: 'personalData', pathMatch: 'full'},
            {path: 'personalData', component: PersonalDataComponent},
            {path: 'personalQuiz', component: PersonalQuizComponent}
    ]}
];
