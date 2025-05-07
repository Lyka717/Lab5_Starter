// matches valid phone numbers
export function isPhoneNumber(phoneNumber) {
  const phoneRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
  return phoneRegex.test(phoneNumber);
}

test('Valid Phone Number', () => {
  expect(isPhoneNumber('(619) 543-4357')).toBe(true);
});
test('No Area Code Phone Number', () => {
  expect(isPhoneNumber('534-3400')).toBe(true);
});
test('inValid Phone Number, no symbols', () => {
  expect(isPhoneNumber('6195434357')).toBe(false);
});
test('inValid Phone Number, not numbers', () => {
  expect(isPhoneNumber('ASD-SDGS')).toBe(false);
});


// matches valid emails
export function isEmail(email) {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
}

test('Correct format, valid Email', () => {
  expect(isEmail('something@gmail.com')).toBe(true);
});
test('Correct format .org, valid Email', () => {
  expect(isEmail('something@AHADHASDADSA.org')).toBe(true);
});
test('Missing @, invalid Email', () => {
  expect(isEmail('somethinggmail.com')).toBe(false);
});
test('Invalid domain, invalid Email', () => {
  expect(isEmail('something@gmail.organization')).toBe(false);
});

/**
 * The password's first character must be a letter, it must contain at least * 4 characters and no more than 15 characters and no characters other than * * letters, numbers and the underscore may be used
 */
export function isStrongPassword(password) {
  const pwRegex = /^[a-zA-Z]\w{3,14}$/;
  return pwRegex.test(password);
}

test('Strictly Correct Password', () => {
  expect(isStrongPassword('P1ZZ4_MEL0NS123')).toBe(true);
});
test('Bare Minimum Password', () => {
  expect(isStrongPassword('pass')).toBe(true);
});
test('Other Symbols Used ,Invalid Password', () => {
  expect(isStrongPassword('Ca$h')).toBe(false);
});
test('Over Max Characters ,Invalid Password', () => {
  expect(isStrongPassword('SSD_SD4sd5945235')).toBe(false);
});


// 	This regular expressions matches dates of the form XX / XX / YYYY where
// XX can be 1 or 2 digits long and YYYY is always 4 digits long.
export function isDate(date) {
  const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
  return dateRegex.test(date);
}

test('2 Digit long Dates, Valid', () => {
  expect(isDate('05/06/2025')).toBe(true);
});
test('1 Digit long Dates, Valid', () => {
  expect(isDate('5/6/2025')).toBe(true);
});
test('Dash Date, Invalid', () => {
  expect(isDate('01-02-3456')).toBe(false);
});
test('2 digit Year, Invalid', () => {
  expect(isDate('05/06/25')).toBe(false);
});


// Matches valid 3 or 6 character hex codes used for HTML or CSS.
export function isHexColor(color) {
  const colorRegex = /^\#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
  return colorRegex.test(color);
}

test('3 Char Hex, Valid', () => {
  expect(isHexColor('f0c')).toBe(true);
});
test('6 Char Hex, Valid', () => {
  expect(isHexColor('4287f5')).toBe(true);
});
test('4 Char Hex, Invalid', () => {
  expect(isHexColor('42f5')).toBe(false);
});
test('1 Char Hex, Invalid', () => {
  expect(isHexColor('F')).toBe(false);
});


