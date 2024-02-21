let celsiusInput=document.querySelector('#Celsius > input');
let fahrenheitInput=document.querySelector('#Fahrenheit > input');
let kelvinInput=document.querySelector('#Kelvin > input');
let btn=document.querySelector('.reset')


function roundnumber(number){
  return Math.round(number*100)/100
}

celsiusInput.addEventListener('input',()=>{
    let ctemp=parseFloat(celsiusInput.value);
    let ftemp=((9/5)*ctemp)+32
    let ktemp=ctemp+273.15
    fahrenheitInput.value=roundnumber(ftemp)
    kelvinInput.value=roundnumber(ktemp)


})

fahrenheitInput.addEventListener('input',()=>{
 let ftemp=parseFloat(fahrenheitInput.value)
 let ctemp=(5/9)*(ftemp-32)
 let ktemp=(ftemp-32)*(5/9)+273.15
 celsiusInput.value=(ctemp)
 kelvinInput.value=(ktemp)
})

kelvinInput.addEventListener('input',()=>{
    let ktemp=parseFloat(kelvinInput.value)
    let ctemp=ktemp-273.15
    let ftemp=(ktemp-273.15)*(9/5)+32
    celsiusInput.value=(ctemp)
    fahrenheitInput.value=(ftemp)

})
btn.addEventListener('click',()=>{
    celsiusInput.value=""
    fahrenheitInput.value=""
    kelvinInput.value=""
})

