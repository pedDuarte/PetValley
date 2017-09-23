import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PersonalDataComponent } from './register-user/personal-data/personal-data.component';
import { PersonalQuizComponent } from './register-user/personal-quiz/personal-quiz.component';
import { RegisterSupplyComponent } from './register-supply/register-supply.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterUserComponent,
    PersonalDataComponent,
    PersonalQuizComponent,
    RegisterSupplyComponent,
    HomeComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
