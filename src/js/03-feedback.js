
import throttle from 'lodash.throttle'

let inputData =
{
    email: '',
    message:'',
}

const formEl = document.querySelector('.feedback-form')

function inputHandler (event){
    event.preventDefault();
    inputData[event.target.name]=event.target.value
    localStorage.setItem("feedback-form-sate",JSON.stringify(inputData)) 
}
formEl.addEventListener('input', throttle(inputHandler, 500))
    
    

function localStorageDataSet (){
    if (localStorage("feedback-form-sate") === undefined){
        return
    }
    else {inputData[event.target.name]

    }
}


// let inputData =
// {
//     email: '',
//     message:'',
// }
// const formEl = document.querySelector('.feedback-form')
// const emailDataEl = document.querySelector('[name="email"]')
// const messageDataEl = document.querySelector('[name="message"]')


// emailDataEl.addEventListener('input', e => {inputData.email =e.target.value})
// messageDataEl.addEventListener('input', e => {inputData.message =e.target.value})
// formEl.addEventListener('submit', onSubmitClick )

// console.log(' -->',emailDataEl.value );
// console.log(' -->',messageDataEl );


// function onSubmitClick (event){
//     event.preventDefault()
//     event.target.reset ()
//     console.log(' -->', inputData );
    

// }
// localStorage.setItem("feedback-form-sate",JSON.stringify(inputData) )


// inputData[event.target.name]=event.target.value