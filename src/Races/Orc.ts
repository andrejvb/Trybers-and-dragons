import Race from './Race';

class Orc extends Race {
  private _maxLifePoints = 74;
  private static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return Orc._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;