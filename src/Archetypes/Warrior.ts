import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  energyType: EnergyType;
  private static archetypeInstances = 0;
  constructor(name: string) {
    super(name);
    this.energyType = 'stamina';
    Warrior.addInstances();
  }

  private static addInstances() {
    this.archetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }
}