import Invoice from './classes/Invoice.js';
import Payment from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    type.value === 'invoice'
        ? doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
        : doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    console.log(doc);
});
