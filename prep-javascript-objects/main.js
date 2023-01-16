var person = {
  firstName: 'Sarah',
  lastName: 'You',
  hobby: 'watching Netflix'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is:", fullName);
person.job = 'learning';
console.log("The person's current job is:", person.job);
person.previousJob = 'marketing assistant';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
