import { Address } from './address.model';

export class User {
   id: number;
   name: string;
   surname: string;
   cpf: number;
   birthday: Date;
   sex: string;
   cellphone: string;
   phone: string;
   adress: Address;
   email: string;
   password: string;
   accessToken: string;
   image: any;
}
