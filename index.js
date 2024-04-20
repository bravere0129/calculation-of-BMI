let gender;
let activityCoefficient;
let age;
let weight;
let grow;

const form = document.forms.main;

const steps = document.querySelectorAll('.step')

document.querySelector('.calculator-gender__items').addEventListener('click', (e) => {
    document.querySelectorAll('.calculator-gender__item').forEach(i => {
        i.classList.remove('active')
    })
    if(e.target.parentElement.closest('.calculator-gender__item')) {
        e.target.parentElement.classList.add('active')
    }
})


document.querySelector('#step-1-btn').addEventListener('click', (e) => {
    e.preventDefault()
    gender = form.gender.value;
    steps[0].style.display = 'none'
    steps[1].style.display = 'block'
    console.log(gender);
})



document.querySelector('.calculator-activity__items').addEventListener('click', (e) => {
    document.querySelectorAll('.calculator-activity__item').forEach(i => {
        i.classList.remove('active')
    })
    if(e.target.parentElement.closest('.calculator-activity__item')) {
        e.target.parentElement.classList.add('active')
    }
})

document.querySelector('#step-2-btn').addEventListener('click', (e) => {
    e.preventDefault()
    activityCoefficient = form.activity.value
    steps[1].style.display = 'none'
    steps[2].style.display = 'block'
    console.log(activityCoefficient);
})

function check(param) {
    if(param.validity.rangeOverflow || param.validity.rangeUnderflow) {
        alert('Не допустимое значение')
    }
    return false
}


form.age.addEventListener('blur', (e) => {
    if(!check(e.target)) {
        age = e.target.value
        console.log(age);
    }
})

form.growth.addEventListener('blur', (e) => {
    if(!check(e.target)) {
        grow = e.target.value
        console.log(grow);
    }
})


form.weight.addEventListener('blur', (e) => {
    if(!check(e.target)) {
        weight = e.target.value
        console.log(weight);
    }
})

function getDailyCalory() {
    if(gender == 'man') {
        return daylyColorie = Math.floor((10 * weight) + (6.25 * grow) - (5 * age + 5 * activityCoefficient))
    } else {
        return daylyColorie = Math.floor((10 * weight) + (6.25 * grow) - (5 * age) - 161 * activityCoefficient)
    }
}

document.querySelector('#step-result').addEventListener('click', (e) => {
    e.preventDefault()
    steps[2].style.display = 'none'
    document.querySelector('.calculator-result').style.display = 'block'
    const index = Math.floor((Math.pow((weight/grow),2))*100)
    console.log(index);
    document.querySelector('#imt-value').innerHTML = index
    document.querySelector('#nc').innerHTML = getDailyCalory()
})