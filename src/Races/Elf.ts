import Race from './Race';

class Elf extends Race {
  private _maxLifePoints = 99;
  private static _createdRacesInstances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._createdRacesInstances += 1;
  }

  static createdRacesInstances() {
    return Elf._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;