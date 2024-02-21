
const getMean = (array) =>array.reduce((acc, el)=> acc + el,0)/array.length;

const getMedian = (array) => {

    const sorted = array.sort((a, b) => a - b);
    const median =
      array.length % 2 === 0
        ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
        : sorted[Math.floor(array.length / 2)];
    return median;
}



const calculate = () => {

const value = document.querySelector("#numbers").value;
const array =  value.split(/,\s*/g);  ///regex for , and space 

const numbers = array.map((num)=> Number(num)).filter((el)=>!isNaN(el)); // onvert string into number 


const mean = getMean(numbers);
document.querySelector("#mean").textContent = mean;

const  median = getMedian(numbers);
document.querySelector("#median").textContent = median;

}



