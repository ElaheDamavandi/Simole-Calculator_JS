// //Wrap code in an IIFE
// (function(){
  
//   let screen = document.querySelector('.screen');
//   let buttons = document.querySelectorAll('.btn');
//   let clear = document.querySelector('.btn-clear');
//   let equal = document.querySelector('.btn-equal');
  
//   //retrieve data from numbers that are clicked
//   buttons.forEach(function(button){
//     button.addEventListener('click', function(e){
//       let value = e.target.dataset.num;
//       screen.value += value;
//     })
//   });
  
//   equal.addEventListener('click', function(e){
//     if(screen.value === ''){
//       screen.value = 'Please Enter a Value';
//     } else {
//       let answer = eval(screen.value);
//       screen.value = answer;
//     }
//   })
  
//   clear.addEventListener('click', function(e){
//     screen.value = '';
//   })
 
// })(); 
// //end IIFE

// ......................My ConvolverNode.apply.................

 // Grab elements functions
 const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Somthing went, make sure that ${selector} exists or is typed correctly.`
  );
};

const selectAllElements = (selector) => {
  const element = document.querySelectorAll(selector);
  if (element) return element;
  throw new Error(
    `Somthing went, make sure that ${selector} exists or is typed correctly.`
  );
};


let screenInput = selectElement('.screen');
let buttons = selectAllElements('.btn');
let clearButton = selectElement('.btn-clear');
let equalButton = selectElement('.btn-equal');



const changeInputScreen = (value) => {
  screenInput.value += value;
}

const showOperation = () => {
  if(screenInput.value == ''){
    screenInput.value = 'Please type something!'
  } else {
    screenInput.value = eval(screenInput.value);
  }
}

//Give ever buttons eventListener
buttons.forEach((button => {
  button.addEventListener('click', (selectedButton) => {
    changeInputScreen(selectedButton.target.dataset.num);
  });
}));


//Give equal button eventListener
equalButton.addEventListener('click', () => {
  showOperation();
})

clearButton.addEventListener('click', () =>{
  screen.value = '';
});