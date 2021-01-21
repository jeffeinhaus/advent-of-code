export const sumMemoryValues = (instructions: string[]): number => {
  let mask = '';
  const memory: Record<number, number> = {};
  instructions.forEach((instruction) => {
    if (instruction.startsWith('mask')) {
      mask = instruction.split(' ')[2];
    } else if (instruction.startsWith('mem')) {
      const value = (Number(instruction.split(' ')[2]) >>> 0).toString(2);
      const zeroPaddedValue = Array(mask.length - value.length + 1).join('0') + value;
      let result = zeroPaddedValue;
      [...zeroPaddedValue].forEach((bit, index) => {
        if (mask.charAt(index) !== 'X') {
          result = result.substring(0, index) + mask.charAt(index) + result.substring(index + 1);
        }
      });
      const memoryAddress = Number(
        instruction.substring(instruction.indexOf('[') + 1, instruction.indexOf(']')),
      );
      memory[memoryAddress] = parseInt(result, 2);
    }
  });

  let sum = 0;
  Object.keys(memory).forEach((memoryAddress) => {
    sum += memory[Number(memoryAddress)];
  });

  return sum;
};

export const sumFloatingMemoryValues = (instructions: string[]): number => {
  let mask = '';
  const memory: Record<number, number> = {};
  instructions.forEach((instruction) => {
    if (instruction.startsWith('mask')) {
      mask = instruction.split(' ')[2];
    } else if (instruction.startsWith('mem')) {
      const memoryAddress = (
        Number(instruction.substring(instruction.indexOf('[') + 1, instruction.indexOf(']'))) >>> 0
      ).toString(2);
      const zeroPaddedAddress =
        Array(mask.length - memoryAddress.length + 1).join('0') + memoryAddress;
      let result = zeroPaddedAddress;
      [...zeroPaddedAddress].forEach((bit, index) => {
        if (mask.charAt(index) !== '0') {
          result = result.substring(0, index) + mask.charAt(index) + result.substring(index + 1);
        }
      });
      const resultStack = [result];
      const finalAddresses: string[] = [];
      while (resultStack.length > 0) {
        const value = resultStack.shift();
        const index = value!.indexOf('X');
        if (index !== -1) {
          resultStack.push(`${value!.substring(0, index)}0${value!.substring(index + 1)}`);
          resultStack.push(`${value!.substring(0, index)}1${value!.substring(index + 1)}`);
        } else {
          finalAddresses.push(value!);
        }
      }

      finalAddresses.forEach((address) => {
        const memoryAddress = parseInt(address, 2);
        memory[memoryAddress] = Number(instruction.split(' ')[2]);
      });
    }
  });

  let sum = 0;
  Object.keys(memory).forEach((memoryAddress) => {
    sum += memory[Number(memoryAddress)];
  });

  return sum;
};
