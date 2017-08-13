import { User, Firm, Commodity } from "./_index";

export class Result {

  firm: Firm;
  commodity: Commodity;
  user: User;
  numberOfCommodities: number;

  constructor(user: User, firm: Firm, commodity: Commodity, numberOfCommodities: number){
      this.user = user;
      this.firm = firm;
      this.commodity = commodity;
      this.numberOfCommodities = numberOfCommodities;
  }

}
