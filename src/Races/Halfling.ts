import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return Halfling._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;