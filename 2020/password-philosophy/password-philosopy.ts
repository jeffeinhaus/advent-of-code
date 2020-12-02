export const passwordPhilosophyCount = (passwords: string[]): number => {
  let validPasswords = 0;
  
  passwords.forEach((password) => {
    const [value, keyCharacter, minBound, maxBound] = parsePassword(password);

    const regex = new RegExp(keyCharacter,"g");
    const count = (value.match(regex) || []).length;

    if (count >= minBound && count <= maxBound) {
      validPasswords++;
    }
  });
  
  return validPasswords;
};

export const passwordPhilosophyLocation = (passwords: string[]): number => {
  let validPasswords = 0;
  
  passwords.forEach((password) => {

    const [value, keyCharacter, firstPosition, secondPosition] = parsePassword(password);

    if (isValidPasswordByLocation(value, keyCharacter, firstPosition, secondPosition)) {
      validPasswords++;
    }
  });
  
  return validPasswords;
}

const parsePassword = (password: string): [string, string, number, number] => {
  const [policy, key, value] = password.split(' ');
  const [firstPosition, secondPosition] = policy.split('-');
  const keyCharacter = key.charAt(0);

  return [value, keyCharacter, parseInt(firstPosition), parseInt(secondPosition)];
}

const isValidPasswordByLocation = (
  password: string, 
  value: string, 
  firstPosition: number, 
  secondPosition: number
): boolean => {
  return (password.charAt(firstPosition - 1) === value 
    || password.charAt(secondPosition - 1) === value)
    && password.charAt(firstPosition - 1) != password.charAt(secondPosition - 1);
}