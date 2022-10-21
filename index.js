const inputNumber = document.getElementById("input-number")
const convertBtn =document.getElementById("convert-btn")
const lengthConverter =document.getElementById("length-converter")
const volumeConverter =document.getElementById("volume-converter")
const massConverter =document.getElementById("mass-converter")
convertBtn.addEventListener("click",function(){
    if(!isNaN(inputNumber.value)){
   lengthConverter.textContent = `${inputNumber.value} meters = ${(inputNumber.value*3.281).toFixed(4)} feet | ${inputNumber.value} feet = ${(inputNumber.value/3.281).toFixed(4)} meters`
   volumeConverter.textContent = `${inputNumber.value} liters = ${(inputNumber.value*0.264).toFixed(4)} gallons | ${inputNumber.value} gallons = ${(inputNumber.value/0.264).toFixed(4)} liters`
   massConverter.textContent = `${inputNumber.value} kilos = ${(inputNumber.value*2.204).toFixed(4)} pounds | ${inputNumber.value} pounds = ${(inputNumber.value/2.204).toFixed(4)} kilos`
}else{
    lengthConverter.textContent =` You haven't entered a number! Please enter a number.`
    volumeConverter.textContent =`You haven't entered a number! Please enter a number.`
    massConverter.textContent =`You haven't entered a number! Please enter a number.`
}
})

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/