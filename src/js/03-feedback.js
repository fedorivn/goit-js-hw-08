
import throttle from 'lodash.throttle'

const emailInput = document.querySelector('[name="email"]')
const textareaInput = document.querySelector('[name="message"]')

let inputData = JSON.parse(localStorage.getItem('feedback-form-sate'))||
{
    email: '',
    message:'',
}



const formEl = document.querySelector('.feedback-form')


function inputHandler (event){
    event.preventDefault();
    
    
    inputData[event.target.name]=event.target.value
    localStorage.setItem("feedback-form-sate",JSON.stringify(inputData)) 
   console.log(' -->',  inputData[event.target.name]);
   
}

formEl.addEventListener('input', throttle(inputHandler, 500))

const handleDomLoaded = () => {
const localStorageDataSet = 
JSON.parse(localStorage.getItem('feedback-form-sate'))



if (localStorageDataSet) {
emailInput.value = localStorageDataSet.email
textareaInput.value =localStorageDataSet.message || ''

}}


window.addEventListener(
    'DOMContentLoaded',
    handleDomLoaded
  );
    



// formEl.value = localStorage.getItem ('feedback-form-sate' )
// console.log(' -->', formEl.value );




    

