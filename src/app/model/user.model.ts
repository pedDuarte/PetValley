import { Address } from './address.model';

export class User {
   id: number;
   name: string;
   surname: string;
   code_cpf: number;
   birthdate: Date;
   sex: string;
   cellphone: string;
   phone_number: string;
   address: Address;
   email: string;
   password: string;
   image: any;
}
