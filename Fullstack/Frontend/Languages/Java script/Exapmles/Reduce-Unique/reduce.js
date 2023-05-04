let arr =[3,5,6,7,1,7,9]

let result = arr.reduce(getSum);


function getSum(total,num)
{
    return total+Math.round(num);
}
console.log(result) 

