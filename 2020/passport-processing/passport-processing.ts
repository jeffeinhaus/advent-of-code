export const passportProcessing = (passports: string[]): [number, number] => {
  let currentPassport = '';
  let prefix = '';
  let looseCount = 0;
  let strictCount = 0;
  passports.forEach((passport) => {
    if (passport) {
      currentPassport += prefix + passport;
      prefix = ' ';
    } else {      
      looseCount = hasAllRequiredFields(currentPassport) ? looseCount + 1 : looseCount;
      strictCount = hasAllValidatedFields(currentPassport) ? strictCount + 1 : strictCount;
      currentPassport = '';
      prefix = '';
    }
  });

  return [looseCount, strictCount];
};

const hasAllRequiredFields = (passport: string): boolean => {
  return hasRequiredField('byr', passport)
    && hasRequiredField('iyr', passport)
    && hasRequiredField('eyr', passport)
    && hasRequiredField('hgt', passport)
    && hasRequiredField('hcl', passport)
    && hasRequiredField('ecl', passport)
    && hasRequiredField('pid', passport);
};

const hasRequiredField = (field: string, passport: string): boolean => {
  return passport.includes(field);
}

const hasAllValidatedFields = (passport: string): boolean => {
  return hasAllRequiredFields(passport) 
    && hasValidDateInRange('byr', passport, 1920, 2002)
    && hasValidDateInRange('iyr', passport, 2010, 2020)
    && hasValidDateInRange('eyr', passport, 2020, 2030)
    && hasValidHeight(passport)
    && hasValidHairColor(passport)
    && hasValidEyeColor(passport)
    && hasValidPassportId(passport);

}

const getFieldToValidate = (field: string, passport: string): string | undefined => {
  const fields = passport.split(' ');
  return fields.find((toValidate) => toValidate.startsWith(field));
}

export const hasValidDateInRange = (field: string, passport: string, minDate: number, maxDate: number): boolean => {
  const fieldToValidate = getFieldToValidate(field, passport);
  if (fieldToValidate) {
    const value = parseInt(fieldToValidate.split(':')[1]);
    return !isNaN(value) && value >= minDate && value <= maxDate; 
  }
  return false;
}

export const hasValidHeight = (passport: string): boolean => {
  const fieldToValidate = getFieldToValidate('hgt', passport);
  if (fieldToValidate) {
    const value = fieldToValidate.split(':')[1];
    return (value.endsWith('cm') && parseInt(value.substring(0, 3)) >= 150 && parseInt(value.substring(0, 3)) <= 193)
      || (value.endsWith('in') && parseInt(value.substring(0, 2)) >= 59 && parseInt(value.substring(0, 2)) <= 76)
  }  
  return false;
}

export const hasValidHairColor = (passport: string): boolean => {
  const fieldToValidate = getFieldToValidate('hcl', passport);
  if (fieldToValidate) {
    const value = fieldToValidate.split(':')[1];
    const regex = RegExp(/^#([0-9a-f]{6})$/);
    return regex.test(value);
  }
  return false;
}

export const hasValidEyeColor = (passport: string): boolean => {
  const fieldToValidate = getFieldToValidate('ecl', passport);
  if (fieldToValidate) {
    const regex = RegExp(/amb|blu|brn|gry|grn|hzl|oth/)
    return regex.test(fieldToValidate);
  }
  return false;
}

export const hasValidPassportId = (passport: string): boolean => {
  const fieldToValidate = getFieldToValidate('pid', passport);
  if (fieldToValidate) {
    const value = fieldToValidate.split(':')[1];
    const regex = RegExp(/^([0-9]{9})$/);
    return regex.test(value);
  }
  return false;
}
