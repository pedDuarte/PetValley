import { AdoptionService } from './services/adoption.service';
import { SendDocumentService } from './services/sendDocument.service';
import { LoginService } from "./services/login.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ROUTES } from "./app.routes";

import { HomeComponent } from "./home/home.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { PersonalDataComponent } from "./register-user/personal-data/personal-data.component";
import { PersonalQuizComponent } from "./register-user/personal-quiz/personal-quiz.component";
import { RegisterSupplyComponent } from "./register-supply/register-supply.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { ListSupplyComponent } from "./list-supply/list-supply.component";
import { RegisterPetComponent } from "./register-pet/register-pet.component";
import { ListPetComponent } from "./list-pet/list-pet.component";
import { PersonalAddressComponent } from "./register-user/personal-address/personal-address.component";
import { PersonalLoginComponent } from "./register-user/personal-login/personal-login.component";

import { PetServices } from "./services/petServices.service";
import { RegisterPetService } from "./services/registerPet.service";
import { UserService } from "./services/user.service";
import { RegisterUserService } from "./register-user/register-user.service";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { EditSupplyComponent } from "./edit-supply/edit-supply.component";
import { PetViewComponent } from "./pet-view/pet-view.component";
import { ListEditPetComponent } from "./list-edit-pet/list-edit-pet.component";
import { EditPetComponent } from "./edit-pet/edit-pet.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { FiltraPetsPipe } from "./customPipes.pipe";
import { FiltraUsuariosPipe } from "./customPipes.pipe";
import { SendDocumentsComponent } from './send-documents/send-documents.component';
import { ApproveAdoptionComponent } from './approve-adoption/approve-adoption.component';

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
    ListUserComponent,
    ListSupplyComponent,
    RegisterPetComponent,
    ListPetComponent,
    PersonalAddressComponent,
    PersonalLoginComponent,
    EditUserComponent,
    EditSupplyComponent,
    PetViewComponent,
    ListEditPetComponent,
    EditPetComponent,
    FirstPageComponent,
    FiltraPetsPipe,
    FiltraUsuariosPipe,
    SendDocumentsComponent,
    ApproveAdoptionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    RegisterUserService,
    LoginService,
    RegisterPetService,
    PetServices,
    SendDocumentService,
    AdoptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
