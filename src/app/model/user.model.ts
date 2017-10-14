import { Adress } from './adress.model';

export class User {
   id: number;
   name: string;
   surname: string;
   cpf: number;
   birthday: Date;
   sex: string;
   cellphone: string;
   phone: string;
   adress: Adress;
   email: string;
   password: string;
   accessToken: string;
}
