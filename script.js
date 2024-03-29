
const getMean = (array) =>array.reduce((acc, el)=> acc + el,0)/array.length;

const getMedian = (array) => {

    const sorted = array.slice().sort((a, b) => a - b);
    const median =
      array.length % 2 === 0
        ? getMean([sorted[array.length / 2], sorted[array.length / 2 - 1]])
        : sorted[Math.floor(array.length / 2)];
    return median;
}

const getMode = (array) => {

  const counts = {};

  array.forEach((el) => {
    counts[el] = (counts[el] || 0) + 1;
  })

  if (new Set(Object.values(counts)).size === 1) {
    return null;
  }

  const highest = Object.keys(counts).sort(
    (a, b) => counts[b] - counts[a])[0];

  const mode = Object.keys(counts).filter(
    (el) => counts[el] === counts[highest]);

  return mode.join(", ");



}


const getRange = (array)=>
{
    return Math.max(...array) - Math.min(...array);
}


const getVariance = (array) => {
    const mean = getMean(array);

    const variance = array.reduce((acc, el) => {
      const difference = el - mean;
      const squared = difference ** 2;
      return acc + squared;
    }, 0) / array.length;
    return variance;
}

const getStandardDeviation = (array)=>
{

    const variance = getVariance(array);

    const standardVariance = Math.sqrt(variance);
    return standardVariance;


}



const calculate = () => {

const value = document.querySelector("#numbers").value;
const array =  value.split(/,\s*/g);  ///regex for , and space 

const numbers = array.map((num)=> Number(num)).filter((el)=>!isNaN(el)); // onvert string into number 


const mean = getMean(numbers);
document.querySelector("#mean").textContent = mean;

const  median = getMedian(numbers);
document.querySelector("#median").textContent = median;

const mode = getMode(numbers);
document.querySelector("#mode").textContent = median;

const range = getRange(numbers);
document.querySelector("#range").textContent = range;

const variance = getVariance(numbers);
document.querySelector("#variance").textContent = variance;

const standardDeviation = getStandardDeviation(numbers);
document.querySelector("#standardDeviation").textContent = standardDeviation;




}


