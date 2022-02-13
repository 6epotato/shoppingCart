// function for increase or decrease case number 
function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let prductNumber = productInput.value;
    if (isIncreasing == true) {
        prductNumber = parseInt(prductNumber) + 1;
    }
    else if (prductNumber > 0) {
        prductNumber = parseInt(prductNumber) - 1;
    }

    productInput.value = prductNumber;

    //update  total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = prductNumber * price;
    // calculate total
    calculateTotal();
}
//function for increase or decrese phone number

/* function updatePhoneNumber(isIncreasing) {
    const phoneInput = document.getElementById('phone-number');
    let phoneNumber = phoneInput.value;
    if (isIncreasing == true) {
        phoneNumber = parseInt(phoneNumber) + 1;

    }
    else if (phoneNumber > 0) {
        phoneNumber = parseInt(phoneNumber) - 1;
    }
    phoneInput.value = phoneNumber;
    //update phone total 
    const phoneTotal = document.getElementById('phone-total');
    phoneTotal.innerText = phoneNumber * 1219;

}

 */

// function to calculate total amount

function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {

    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    // update tax
    const tax = subTotal / 10;
    //update total 
    const total = subTotal + tax;
    //update on html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = total;
}




//phone increase decrese event 

document.getElementById('phone-plus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', function () {

    updateProductNumber('phone', 1219, false);
})

//case increase decrease event 

// for case amount pluse
document.getElementById('case-plus').addEventListener('click', function () {

    updateProductNumber('case', 59, true);

});

// for case amount minus

document.getElementById('case-minus').addEventListener('click', function () {

    updateProductNumber('case', 59, false);

});


