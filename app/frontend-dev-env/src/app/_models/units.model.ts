import { Unit } from './unit.model'

export class Units {

  name: string;
  list_of_units: Unit[];

  constructor(name: string, list_of_units: Unit[]){
      this.name = name;
      this.list_of_units = list_of_units
  }

}
