// 1. create some person obj with firstname, lastname and printDetails function
//          Remember to use 'this' in your function

var person1 = {
    firstName: 'Giorgi',
    lastName: 'Gulisashvili',
   
  };

  var printDetails = function(age, occupation) {
    console.log("Name:", this.firstName, this.lastName, "Age:", age, "Occupation:", occupation);
  }

  printDetails(21, 'Programmer');
  
  // 2. Create another person obj, and try to borrow the function from person1
  var person2 = {
    firstName: 'Mariam',
    lastName: 'Ostatishvili'
  };
  
  printDetails.call(person2, 35, 'Programmer');
  printDetails.apply(person2, [35, 'Programmer']); 
  
  // 4. Introduce at least 2 arguments to your printDetails function.
  // 5. Pass these arguments through call, apply methods
  printDetails.call(person2, 28, 'Lawyer');
  printDetails.apply(person2, [28, 'Lawyer']);
  
  // 6. Now use bind to create copies of function (with some context)
  var person3 = {
    firstName: 'Mayur',
    lastName: 'Sonar'
  };
  
  var printPerson3Details = printDetails.bind(person3, " Unknown :)", );
  printPerson3Details('Programmer'); 