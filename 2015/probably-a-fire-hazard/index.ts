import { Position } from '@types';

export class LightGrid {
  public readonly lights: boolean[][];

  constructor(gridSize: number) {
    this.lights = [...Array(gridSize)].map(() => Array(gridSize).fill(false));
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
        this.lights[i][j] = !this.lights[i][j];
      }
    }
  };

  public getLightsOn = (): number => {
    let lightsOn = 0;
    for (let i = 0; i < this.lights.length; i++) {
      for (let j = 0; j < this.lights[i].length; j++) {
        lightsOn = this.lights[i][j] ? lightsOn + 1 : lightsOn;
      }
    }
    return lightsOn;
  };

  private switchInRange = (start: Position, end: Position, shouldTurnOn: boolean): void => {
    for (let i = start.x; i <= end.x; i++) {
      for (let j = start.y; j <= end.y; j++) {
        this.lights[i][j] = shouldTurnOn;
      }
    }
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

export const countOnLights = (instructions: string[]): number => {
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

  return grid.getLightsOn();
};
