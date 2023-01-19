function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
var addTwoNumbersResult = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise:', addTwoNumbersResult);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
var convertHoursToMinutesResult = convertHoursToMinutes(3);
console.log('convertHoursToMinutes exercise:', convertHoursToMinutesResult);

function getGreeting(name) {
  return 'Hello my name is ' + name;
}
var getGreetingResult = getGreeting('Sarah');
console.log('getGreeting exercise:', getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
var addAndMultiplyBy5Result = addAndMultiplyBy5(2, 4);
console.log('addAndMultiplyBy5 exercise: ', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
var multiplyAndDivideBy5Result = multiplyAndDivideBy5(3, 5);
console.log('multiplyAndDivideBy5 exercise: ', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var subtractTwoNumbersResult = subtractTwoNumbers(10, 4);
console.log('subtractTwoNumbers exercise: ', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}
var getCircleCircumferenceResult = getCircleCircumference(4);
console.log('getCircleCircumference exerecise: ', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var getFullNameResult = getFullName('Sarah ', 'You');
console.log('getFullName exercise: ', getFullNameResult);

function cube(number) {
  return Math.pow(number, 3);
}
var cubeResult = cube(8);
console.log('cube exercise: ', cubeResult);
