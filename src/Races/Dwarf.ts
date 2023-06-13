import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return Dwarf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;