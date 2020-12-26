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

  calculateSmallestPerimeter = (): number =>
    Math.min(
      this.length * 2 + this.width * 2,
      this.length * 2 + this.height * 2,
      this.width * 2 + this.height * 2,
    );

  calculateVolume = (): number => this.length * this.width * this.height;
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
  solver(
    dimensions,
    (dimension) => dimension.calculateSurfaceArea() + dimension.calculateAreaSmallestSide(),
  );

export const calculateTotalRibbon = (dimensions: string[]): number =>
  solver(
    dimensions,
    (dimension) => dimension.calculateSmallestPerimeter() + dimension.calculateVolume(),
  );

const solver = (dimensions: string[], sumFunction: (dimension: Dimensions) => number) =>
  dimensions
    .map((dimension) => convertToDimensions(dimension))
    .map(sumFunction)
    .reduce((total, current) => total + current);
