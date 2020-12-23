export class Dimensions {
  length: number;
  width: number;
  height: number;

  constructor(length: number, width: number, height: number) {
    this.length = length;
    this.width = width;
    this.height = height;
  }

  calculateSurfaceArea = (): number =>
    2 * this.length * this.width + 2 * this.width * this.height + 2 * this.height * this.length;

  calculateAreaSmallestSide = (): number =>
    Math.min(this.length * this.width, this.width * this.height, this.height * this.length);
}

export const convertToDimensions = (dimensions: string): Dimensions => {
  const individualDimensions = dimensions.split('x');
  return new Dimensions(
    Number(individualDimensions[0]),
    Number(individualDimensions[1]),
    Number(individualDimensions[2]),
  );
};

export const calculateTotalWrappingPaper = (dimensions: string[]): number =>
  dimensions
    .map((dimension) => convertToDimensions(dimension))
    .map((dimension) => dimension.calculateSurfaceArea() + dimension.calculateAreaSmallestSide())
    .reduce((totalWrappingPaper, area) => totalWrappingPaper + area);
