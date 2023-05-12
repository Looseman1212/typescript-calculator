// let activeEquation = {
//   firstnum: '',
//   operator: '',
//   secondnum: '',
//   result: ''
// }

// const numberButtons = document.querySelectorAll('.number-btn');
// const screenText = document.querySelector('.screen-text')

// function numberClickEvent(num) {
//   if (activeEquation.operator !== '') {
//     // if an operator has been selected, update the second number
//     activeEquation.secondnum += num;
//     screenText.innerHTML = activeEquation.secondnum;
//   } else {
//     if (screenText.innerHTML === '0' || activeEquation.firstnum != '') {
//       // if the screen text only consists of '0' or the activeEquation.firstnum does contain a number
//       screenText.innerHTML = '';
//      }
//     screenText.insertAdjacentHTML('beforeend', num);
//   }
// }

// numberButtons.forEach((btn) => {
//   let inputNum = btn.textContent
//   btn.addEventListener('click', () => { numberClickEvent(inputNum) });
// })

// const clearBtn = document.querySelector('.clear-btn');

// clearBtn.addEventListener('click', () => {
//   screenText.innerHTML = '0';
//   activeEquation = {
//     firstnum: '',
//     operator: '',
//     secondnum: '',
//     result: ''
//   };
//   console.log('activeEquation Object reset');
// })

// const operatorBtns = document.querySelectorAll('.operator-btn');

// operatorBtns.forEach((btn) => {
//   btn.addEventListener('click', () => { beginEquation() });
// })
// function beginEquation() {
//   activeEquation.firstnum = Number(screenText.innerHTML);
//   console.log(`activeEquation.firstnum: ${activeEquation.firstnum}`);
//   let focusedOperator = document.activeElement.innerHTML;
//   activeEquation.operator = focusedOperator;
//   console.log(`activeEquation.operator: ${activeEquation.operator}`);
// }

// const equalsBtn = document.querySelector('.equals-btn');

// equalsBtn.addEventListener('click', () => { runCalc() });
// function runCalc() {
//   activeEquation.secondnum = Number(screenText.innerHTML);
//   console.log(`activeEquation.secondnum: ${activeEquation.secondnum}`);
//   switch (activeEquation.operator) {
//     case '+':
//       activeEquation.result = activeEquation.firstnum + activeEquation.secondnum;
//       break;
//     case '−':
//       activeEquation.result = activeEquation.firstnum - activeEquation.secondnum;
//       break;
//     case '×':
//       activeEquation.result = activeEquation.firstnum * activeEquation.secondnum;
//       break;
//     case '÷':
//       activeEquation.result = activeEquation.firstnum / activeEquation.secondnum;
//       break;
//   }
//   console.log(`activeEquation.result: ${activeEquation.result}`);
//   screenText.innerHTML = activeEquation.result.toString();
//   activeEquation = {
//     firstnum: '',
//     operator: '',
//     secondnum: '',
//     result: ''
//   };
//   console.log('activeEquation reset');
// }
