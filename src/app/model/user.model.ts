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
   email: string;
   password: string;
   adrres: Adress;
}
