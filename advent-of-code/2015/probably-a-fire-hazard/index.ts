import { Position } from '@types';

type Light = {
  on: boolean;
  brightness: number;
};

export class LightGrid {
  public readonly lights: Light[][];

  constructor(gridSize: number) {
    this.lights = this.initialize2dLightsArray(gridSize);
  }

  public turnOn = (start: Position, end: Position): void => {
    this.switchInRange(start, end, true);
  };

  public turnOff = (start: Position, end: Position): void => {
    this.switchInRange(start, end, false);
  };

  public toggle = (start: Position, end: Position): void => {
    for (let i = start.x; i <= end.x; i++) {
      for (let j = start.y; j <= end.y; j++) {
        this.lights[i][j].on = !this.lights[i][j].on;
        this.lights[i][j].brightness += 2;
      }
    }
  };

  public getLightsOn = (): number => {
    let lightsOn = 0;
    for (let i = 0; i < this.lights.length; i++) {
      for (let j = 0; j < this.lights[i].length; j++) {
        lightsOn = this.lights[i][j].on ? lightsOn + 1 : lightsOn;
      }
    }
    return lightsOn;
  };

  public getBrightness = (): number => {
    let brightness = 0;
    for (let i = 0; i < this.lights.length; i++) {
      for (let j = 0; j < this.lights[i].length; j++) {
        brightness += this.lights[i][j].brightness;
      }
    }
    return brightness;
  };

  private switchInRange = (start: Position, end: Position, shouldTurnOn: boolean): void => {
    for (let i = start.x; i <= end.x; i++) {
      for (let j = start.y; j <= end.y; j++) {
        this.lights[i][j].on = shouldTurnOn;
        this.lights[i][j].brightness = shouldTurnOn
          ? this.lights[i][j].brightness + 1
          : Math.max(this.lights[i][j].brightness - 1, 0);
      }
    }
  };

  private initialize2dLightsArray = (gridSize: number): Light[][] => {
    const lightsArray = new Array(gridSize);
    for (let i = 0; i < gridSize; i++) {
      lightsArray[i] = new Array(gridSize);
      for (let j = 0; j < gridSize; j++) {
        lightsArray[i][j] = { on: false, brightness: 0 };
      }
    }
    return lightsArray;
  };
}

export enum InstructionType {
  TURN_ON,
  TURN_OFF,
  TOGGLE,
}

type Instruction = {
  start: Position;
  end: Position;
  instruction: InstructionType;
};

export const convertToInstruction = (instruction: string): Instruction => {
  const positions = instruction.match(/[0-9]+,([0-9])+/g);
  const start = positions[0].split(',');
  const end = positions[1].split(',');
  const instructionType = instruction
    .match(/turn\son|turn\soff|toggle/g)[0]
    .replace(' ', '_')
    .toUpperCase();
  return {
    start: {
      x: Number(start[0]),
      y: Number(start[1]),
    },
    end: {
      x: Number(end[0]),
      y: Number(end[1]),
    },
    instruction: InstructionType[instructionType as keyof typeof InstructionType],
  };
};

export const countOnLights = (instructions: string[]): number =>
  executeInstructions(instructions).getLightsOn();

export const getTotalBrightness = (instructions: string[]): number =>
  executeInstructions(instructions).getBrightness();

const executeInstructions = (instructions: string[]): LightGrid => {
  const grid = new LightGrid(1000);

  instructions
    .map((instruction) => convertToInstruction(instruction))
    .forEach((instruction) => {
      if (instruction.instruction === InstructionType.TURN_ON) {
        grid.turnOn(instruction.start, instruction.end);
      } else if (instruction.instruction === InstructionType.TURN_OFF) {
        grid.turnOff(instruction.start, instruction.end);
      } else if (instruction.instruction === InstructionType.TOGGLE) {
        grid.toggle(instruction.start, instruction.end);
      }
    });

  return grid;
};
