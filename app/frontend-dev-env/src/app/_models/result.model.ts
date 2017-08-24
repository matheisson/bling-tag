import { User, Firm, Commodity, NumberOfUnit } from "./_index";

export class Result {

  firm: Firm;
  commodity: Commodity;
  user: User;
  numberOfUnits: NumberOfUnit[];

  constructor(user: User, firm: Firm, commodity: Commodity, numberOfUnits: NumberOfUnit[]){
      this.user = user;
      this.firm = firm;
      this.commodity = commodity;
      this.numberOfUnits = numberOfUnits;
  }

}
