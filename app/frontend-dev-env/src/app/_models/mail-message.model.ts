import { NumberOfUnit } from "./_index";


export class MailMessage {

  username: string
  numberOfUnits: NumberOfUnit[];
  short_name: string;
  value: number;
  commodity: string;
  email: string;

  constructor(username: string, numberOfUnits: NumberOfUnit[], short_name: string, value: number, commodity: string){
      this.username = username;
      this.numberOfUnits = numberOfUnits;
      this.short_name = short_name;
      this.value = value;
      this.commodity = commodity;
  }

}
