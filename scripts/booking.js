/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
document.addEventListener('DOMContentLoaded', function() {
    let cost_of_Day = 0;
    let day_selected = [];
    let full_day_button = document.getElementById('full');
    let half_day_button = document.getElementById('half');
    let clear_Button = document.getElementById('clear-button');
    let calculated_Cost = document.getElementById('calculated-cost');
    let day_Buttons = document.querySelectorAll('.day-selector li');    
    cost_of_Day = 35;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
day_Buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        let day = button.id;
        if (!day_selected.includes(day)) {
            day_selected.push(day);
            button.classList.add('clicked');
        } else {
            let index = day_selected.indexOf(day);
            day_selected.splice(index, 1);
            button.classList.remove('clicked');
        }
        recalculateTotalCost();
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear_Button.addEventListener('click', function() {
    day_selected.forEach(function(day) {
        let button = document.getElementById(day);
        button.classList.remove('clicked');
    });
    day_selected = [];
    recalculateTotalCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half_day_button.addEventListener('click', function() {
    cost_of_Day = 20;
    half_day_button.classList.add('clicked');
    full_day_button.classList.remove('clicked');
    recalculateTotalCost();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full_day_button.addEventListener('click', function() {
    cost_of_Day = 35;
    full_day_button.classList.add('clicked');
    half_day_button.classList.remove('clicked');
    recalculateTotalCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculateTotalCost() {
    let total_Cost = cost_of_Day * day_selected.length;
    calculated_Cost.textContent = total_Cost;
}
});
    
