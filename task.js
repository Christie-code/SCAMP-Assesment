function fibbonacci(parameter){
    if (parameter===1)
    {
        return [0,1];
    }
    else
    {
        const result = fibbonacci(parameter- 1);
        result.push(result[result.length -1] +
            result[result.length - 2]);
            return result;
    }
};

console.log(fibbonacci(50));