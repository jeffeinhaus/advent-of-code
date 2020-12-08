export const detectInfiniteLoop = (instructions: string[]): [number, boolean] => {
  let acc = 0;
  let instructionIndex = 0;
  let foundInstructions: boolean[] = new Array(instructions.length).fill(false);
  while(!foundInstructions[instructionIndex] && instructionIndex < instructions.length) {
    foundInstructions[instructionIndex] = true;
    const [instruction, operation] = instructions[instructionIndex].split(' ');
    const value = Number(operation.substring(1));
    const sign = operation.charAt(0);
    if (instruction === 'acc') {
      acc = sign === '+' ? acc + value : acc - value;
      instructionIndex++;
    } else if (instruction === 'jmp') {
      instructionIndex = sign === '+' ? instructionIndex + value : instructionIndex - value;
    } else {
      instructionIndex++;
    }
  }

  return [acc, instructionIndex >= instructions.length];
};

export const fixBadInstruction = (instructions: string[]): number => {
  for(const instruction in instructions) {
    const alteredInstructions = [...instructions];
    const foundInstruction = instructions[instruction].split(' ');
    if (foundInstruction[0] === 'jmp') {
      alteredInstructions[instruction] = `nop ${foundInstruction[1]}`;
    } else if (foundInstruction[0] === 'nop') {
      alteredInstructions[instruction] = `jmp ${foundInstruction[1]}`;
    } else if (foundInstruction[0] === 'acc') {
      continue;
    }
    const [acc, didTerminate] = detectInfiniteLoop(alteredInstructions);
    if (didTerminate) {
      return acc;
    }
  }

  return 0;
}