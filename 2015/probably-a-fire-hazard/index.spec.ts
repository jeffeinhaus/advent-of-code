import {
  InstructionType,
  LightGrid,
  convertToInstruction,
  countOnLights,
  getTotalBrightness,
} from '.';
import { fileToStringArray } from '@utils/file-reader';

describe('Probably a Fire Hazard', () => {
  const puzzle = fileToStringArray(__dirname, 'input/puzzle.txt');

  describe(LightGrid, () => {
    let grid: LightGrid;
    beforeEach(() => {
      grid = new LightGrid(1000);
    });

    describe('turnOn', () => {
      beforeEach(() => {
        grid.turnOn({ x: 0, y: 0 }, { x: 999, y: 999 });
      });

      it('switches the lights to true in the range', () => {
        expect(
          grid.lights[Math.floor(Math.random() * 999) + 1][Math.floor(Math.random() * 999) + 1].on,
        ).toEqual(true);
        expect(grid.getLightsOn()).toEqual(1000000);
      });

      it('increases the brightness by 1 in the range', () => {
        expect(
          grid.lights[Math.floor(Math.random() * 999) + 1][Math.floor(Math.random() * 999) + 1]
            .brightness,
        ).toEqual(1);
        expect(grid.getBrightness()).toEqual(1000000);
      });
    });

    describe('toggle', () => {
      it('toggles the lights in the range', () => {
        grid.turnOn({ x: 500, y: 0 }, { x: 999, y: 0 });
        grid.toggle({ x: 0, y: 0 }, { x: 999, y: 0 });
        expect(grid.lights[Math.floor(Math.random() * 500) + 1][0].on).toEqual(true);
        expect(grid.lights[Math.floor(Math.random() * 500) + 499][0].on).toEqual(false);
        expect(grid.getLightsOn()).toEqual(500);
      });

      it('increases the brightness by 2 in the range', () => {
        grid.toggle({ x: 0, y: 0 }, { x: 999, y: 0 });
        expect(grid.lights[Math.floor(Math.random() * 500) + 1][0].brightness).toEqual(2);
        expect(grid.lights[Math.floor(Math.random() * 500) + 499][0].brightness).toEqual(2);
        expect(grid.getBrightness()).toEqual(2000);
      });
    });

    describe('turnOff', () => {
      it('switches the lights to false in the range', () => {
        grid.turnOn({ x: 499, y: 499 }, { x: 500, y: 500 });
        grid.turnOff({ x: 499, y: 499 }, { x: 500, y: 500 });
        expect(grid.lights[499][499].on).toEqual(false);
        expect(grid.lights[499][500].on).toEqual(false);
        expect(grid.lights[500][499].on).toEqual(false);
        expect(grid.lights[500][500].on).toEqual(false);
      });

      it('decreases the brightness by 1 in the range', () => {
        grid.turnOn({ x: 499, y: 499 }, { x: 500, y: 500 });
        grid.turnOn({ x: 499, y: 499 }, { x: 500, y: 500 });
        grid.turnOff({ x: 499, y: 499 }, { x: 500, y: 500 });
        expect(grid.lights[499][499].brightness).toEqual(1);
        expect(grid.lights[499][500].brightness).toEqual(1);
        expect(grid.lights[500][499].brightness).toEqual(1);
        expect(grid.lights[500][500].brightness).toEqual(1);
        expect(grid.getBrightness()).toEqual(4);
      });
    });
  });

  describe(convertToInstruction, () => {
    it('converts string instruction to instruction type', () => {
      expect(convertToInstruction('turn on 489,959 through 759,964')).toEqual({
        start: { x: 489, y: 959 },
        end: { x: 759, y: 964 },
        instruction: InstructionType.TURN_ON,
      });
      expect(convertToInstruction('turn off 489,959 through 759,964')).toEqual({
        start: { x: 489, y: 959 },
        end: { x: 759, y: 964 },
        instruction: InstructionType.TURN_OFF,
      });
      expect(convertToInstruction('toggle 489,959 through 759,964')).toEqual({
        start: { x: 489, y: 959 },
        end: { x: 759, y: 964 },
        instruction: InstructionType.TOGGLE,
      });
    });
  });

  describe(countOnLights, () => {
    it('counts the number of turned on lights after executing all the instructions', () => {
      expect(countOnLights(puzzle)).toEqual(569999);
    });
  });

  describe(getTotalBrightness, () => {
    it('counts the total brightness after executing all the instructions', () => {
      expect(getTotalBrightness(puzzle)).toEqual(17836115);
    });
  });
});
