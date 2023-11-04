const input = document.getElementById('input')
const btnSubmit = document.getElementById('submit')
const btnSuccess = document.querySelector('.successbtn')
const errorAlert = document.querySelector('.hide')
const emailSpan = document.getElementById('email')
const mainForm = document.querySelector('.main___container')
const successForm = document.querySelector('.success___container')


input.addEventListener('click', () => {
    input.value = ''
    input.style.border = '1px solid hsl(235, 18%, 26%)'
    input.style.color = 'hsl(235, 18%, 26%)'
    errorAlert.style.display = 'none'
})


btnSubmit.addEventListener('click', () => {
    if(!ValidateEmail(input.value) || input.value === 'example@email.com'){
        input.style.border = '1px solid hsl(4, 100%, 67%)'
        input.style.color = 'hsl(4, 100%, 67%)'
        input.value = 'example@email.com'
        errorAlert.style.display = 'block'
    }else{
        mainForm.classList.add('none')
        successForm.classList.add('block')
        emailSpan.textContent = input.value
        input.value = ''
    }
})

btnSuccess.addEventListener('click', () => {
    mainForm.classList.remove('none')
    successForm.classList.remove('block')
})


function ValidateEmail(inputText) {
    var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return mailformat.test(inputText);
}