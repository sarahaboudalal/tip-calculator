const tipButtons = document.querySelectorAll(".btns");
const billInput = document.querySelector('.bill-input')
const customTip = document.querySelector('.custom')
const peopleInput = document.querySelector('.people-input')
const tipAmount = document.querySelector('.tip-amount')
const totalAmount = document.querySelector('.total-amount')
const resetButton = document.querySelector('.reset-button')



function calculate(total) {

let tipPerPerson = (total * billInput.value)/ 100 / peopleInput.value;
let totalPerPerson = (billInput.value / peopleInput.value) + tipPerPerson;
tipAmount.innerHTML ="$" + tipPerPerson.toFixed(2)
totalAmount.innerHTML = "$" + totalPerPerson.toFixed(2)

}

function reset (){

    totalAmount.innerHTML = "$0.00"
    tipAmount.innerHTML ="$0.00"
    billInput.value = "";
    peopleInput.value = "";
    customTip.value = "";

}

peopleInput.addEventListener("input", (e) => {

    if(peopleInput.value < 1) {
        alert("Cannot Be Zero!")
        reset()
    }
})

tipButtons.forEach((button) => {

    button.addEventListener("click", (e) => {
       let total = parseInt(e.target.value);
     calculate(total);

    })
})

customTip.addEventListener("input", (e) => {

let total = e.target.value;
calculate(total)

})

resetButton.addEventListener("click", (e) => {

    reset()
    
})

