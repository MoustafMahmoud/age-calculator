// inputs
const dayInp = document.getElementById('day');
const monthInp = document.getElementById('month')
const yearInp = document.getElementById('year')
// outputs
const dayOut = document.getElementById('DD')
const monthOut = document.getElementById('MM')
const yearOut = document.getElementById('YY')
// error
const dayError = document.getElementById('dayError')
const monthError = document.getElementById('monthError')
const yearError = document.getElementById('yearError')
// formElement
const form = document.querySelector('form')
// Adding submit eventlistener to form
form.addEventListener('submit',handleSubmit);
const date = new Date()
let day = date.getDate()
let month = 1 + date.getMonth()
let year = date.getFullYear()

const months = [31,28,31,30,31,30,31,31,30,31,30,31]

function validate(){
    const inputs = document.querySelectorAll('input')
    let validator = true
    inputs.forEach((i)=>{
        const parent = i.parentElement;
        if(!i.value){
            i.style.borderColor = "var(--Light-red)"
            parent.querySelector('p').innerText="this field is required."
            validator = false
        }else if(monthInp.value > 12 || monthInp.value<1){
            monthInp.style.borderColor = "var(--Light-red)"
            monthError.innerText="must be a valid month."
            validator = false
        }else if(dayInp.value > 31 || dayInp.value<1){
            dayInp.style.borderColor = "var(--Light-red)"
            dayError.innerText="must be a valid day."
            validator = false
        }else if(yearInp.value > date.getFullYear()){
            yearInp.style.borderColor = "var(--Light-red)"
            yearError.innerText="Must be in the past"
            validator= false
        }
        else{
            i.style.borderColor = "var(--Off-black)"
            parent.querySelector('p').innerText=""
            validator = true
        }
    })
    return validator;
}

function handleSubmit(e){
    e.preventDefault()
    if(validate()){
        if (dayInp.value > day){
            day = day + months[month - 1];
            month = month -1
        }
        if(monthInp.value > month){
            month = month + 12 ;
            year = year - 1;
        }
        const d = day - dayInp.value;
        const m = month - monthInp.value;
        const y = year - yearInp.value;

        dayOut.innerHTML= d;
        monthOut.innerHTML = m;
        yearOut.innerHTML = y;
    }
}