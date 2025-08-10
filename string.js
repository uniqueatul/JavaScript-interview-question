function customTag(strings, ...values) {
  let result = '';
  for (let i = 0; i < strings.length; i++) {
    result += strings[i];
    if (i < values.length) result += values[i];
  }
  return result;
}
const name = 'John';
const age = 30;
customTag`My name is ${name} and I am ${age} years old.`;
// "My name is John and I am 30 years old."
