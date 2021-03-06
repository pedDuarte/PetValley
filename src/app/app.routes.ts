import { AdoptionsComponent } from './adoptions/adoptions.component';
import { ReportAdoptionComponent } from './report-adoption/report-adoption.component';
import { SendDocumentsComponent } from './send-documents/send-documents.component';
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterUserComponent } from "./register-user/register-user.component";
import { PersonalDataComponent } from "./register-user/personal-data/personal-data.component";
import { PersonalQuizComponent } from "./register-user/personal-quiz/personal-quiz.component";
import { PersonalAddressComponent } from "./register-user/personal-address/personal-address.component";
import { PersonalLoginComponent } from "./register-user/personal-login/personal-login.component";
import { RegisterSupplyComponent } from "./register-supply/register-supply.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { ListSupplyComponent } from "./list-supply/list-supply.component";
import { RegisterPetComponent } from "./register-pet/register-pet.component";
import { ListPetComponent } from "./list-pet/list-pet.component";
import { ListEditPetComponent } from "./list-edit-pet/list-edit-pet.component";
import { FirstPageComponent } from "./first-page/first-page.component";
import { ApproveAdoptionComponent } from './approve-adoption/approve-adoption.component';

export const ROUTES: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  {
    path: "registerUser",
    component: RegisterUserComponent,
    children: [
      { path: "", redirectTo: "personalData", pathMatch: "full" },
      { path: "personalData", component: PersonalDataComponent },
      { path: "personalQuiz", component: PersonalQuizComponent },
      { path: "personalAddress", component: PersonalAddressComponent },
      { path: "personalLogin", component: PersonalLoginComponent }
    ]
  },
  { path: "registerSupply", component: RegisterSupplyComponent },
  { path: "listUser", component: ListUserComponent },
  { path: "listSupply", component: ListSupplyComponent },
  { path: "registerPet", component: RegisterPetComponent },
  { path: "listPet", component: ListPetComponent },
  { path: "listEditPet", component: ListEditPetComponent },
  { path: "firstPage", component: FirstPageComponent },
  { path: "sendDocuments", component: SendDocumentsComponent },
  { path: "approveAdoption", component: ApproveAdoptionComponent },
  { path: "reportAdoption", component: ReportAdoptionComponent },
  { path: "adoptions", component: AdoptionsComponent}
];
