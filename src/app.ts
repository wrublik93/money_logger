import Invoice from './classes/Invoice.js';
import ListTemplate from './classes/ListTemplate.js';
import Payment from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLSelectElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    let values: [string, string, number];
    values = [toFrom.value, details.value, amount.valueAsNumber];

    type.value === 'invoice' 
        ? doc = new Invoice(...values)
        : doc = new Payment(...values);
    
    list.render(doc, type.value, 'end');
});