/*text inputs values*/ 

const totalCost = document.getElementById('total-cost'),
      anInitialFee = document.getElementById('an-initial-fee'),
      creditTerm = document.getElementById('credit-term');

/*range inputs values*/ 

const totalCostRange = document.getElementById('total-cost-range'),
      anInitialFeeRange = document.getElementById('an-initial-fee-range'),
      creditTermRange = document.getElementById('credit-term-range');
    
/*total values*/ 

const totalAmountOfCredit = document.getElementById('amount-of-credit'),
      totalMounthlyPayment = document.getElementById('mounthly-payment'),
      totalRecommendedIncome = document.getElementById('recommended-income');

/*all ranges*/ 
const inputsRange = document.querySelectorAll('.input-range');

/*all buttons*/
const bankBtns = document.querySelectorAll('.bank');

const assingValue = () => {
    totalCost.value = totalCostRange.value;
    anInitialFeeRange.setAttribute('max', totalCost.value);
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = creditTermRange.value;
} 

assingValue();

const banks = [
    {
        name: 'alfa',
        precents: 8.7
    },
    {
        name: 'oshchad',
        precents: 8.4
    },
    {
        name: 'pryvat',
        precents: 8.1
    },
    {
        name: 'mega',
        precents: 8.8
    }
];

let currentPrecent = banks[0].precents;

for (const bank of bankBtns) {
    bank.addEventListener('click', () =>{
        for (const item of bankBtns) {
            item.classList.remove('active');
        }
        bank.classList.add('active');
        takeActiveBank(bank)
    })
}

const takeActiveBank = currentActie => {
    const dataAttrValue = currentActie.dataset.name;
    const currentBank = banks.find(bank => bank.name === dataAttrValue);
    currentPrecent = currentBank.precents;
    calculation(totalCost.value,  anInitialFee.value, creditTerm.value);
};

for (let input of inputsRange) {
   input.addEventListener('input', () => {
       assingValue();
       calculation(totalCost.value,  anInitialFee.value, creditTerm.value);
   })
}
/*
    mp - mounthl pyment;
    cs - credit size
    pr - precent
    cm - count mounth
    mp = (cs + (((cs / 100) * pr)/ 12) * cm) /cm;
*/
const calculation = (totalCost = 0, anInitialFee = 100000, creditTerm = 1) => {
    let monthlyPayment;
    let lounAmount = totalCost - anInitialFee;
    let interestRate = currentPrecent;
    let numberOfYears = creditTerm;
    let numberOfMounth = 12 * numberOfYears;

    monthlyPayment = (lounAmount + (((lounAmount/100)*interestRate) / 12) * numberOfMounth) / numberOfMounth;
    const monthlyPaymentArrounded = Math.round(monthlyPayment);
    
    if(monthlyPaymentArrounded<0){
        return false;
    }else{
        totalAmountOfCredit.innerHTML = `${lounAmount} UAN`;
        totalMounthlyPayment.innerHTML = `${monthlyPaymentArrounded} UAN`
        totalRecommendedIncome.innerHTML = `${monthlyPaymentArrounded + ((monthlyPaymentArrounded/100)*35)} UAN`;
    }
}


