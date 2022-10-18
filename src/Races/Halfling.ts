import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static racesInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.addInstances();
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