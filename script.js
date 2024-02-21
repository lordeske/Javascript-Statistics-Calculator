
const getMean = (array) =>array.reduce((acc, el)=> acc + el,0)/array.length;





const calculate = () => {

const value = document.querySelector("#numbers").value;
const array =  value.split(/,\s*/g);  ///regex for , and space 

const numbers = array.map((num)=> Number(num)).filter((el)=>!isNaN(el)); // onvert string into number 


const mean = getMean(numbers);
document.querySelector("#mean").textContent = mean;



}




