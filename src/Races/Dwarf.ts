import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  private static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addInstances();
  }

  private static addInstances() {
    this.racesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}