function myEach(array,alert){   
    if (typeof(array)==='object'){
        let newArray=Object.values(array);
        newArray.forEach(element=>alert(element))
    }
    else {
    array.forEach(element=>alert(element))
    }
        return array;
        }

function myMap(array,callback){
    if (typeof(array)==='object'){
        let newArray=Object.values(array);
        const newerArray=newArray.map(callback);
        return newerArray;
    }
    else {
    const newArray=array.map(callback);
    return newArray;
    }
        
}

function myReduce(array,callback,init){
   if (init>0){

   if (typeof(array)==='object'){
        let newArray=Object.values(array);
        const newerArray=newArray.reduce(callback,init);
        return newerArray;
    }
    else {
    const newArray=array.reduce(callback,init);
    return newArray;
    }
}
    else
    if (typeof(array)==='object'){
        let newArray=Object.values(array);
        const newerArray=newArray.reduce(callback);
        return newerArray;
    }
    else {
    const newArray=array.reduce(callback);
    return newArray;
    }
}

function myFind(array,callback){
    if (typeof(array)==='object'){
        let newArray=Object.values(array);
        const newerArray=newArray.find(callback);
        return newerArray;
    }
    else {
    const newArray=array.find(callback);
    return newArray;
    }

}

function myFilter(array,callback){
    if (typeof(array)==='object'){
        let newArray=Object.values(array);
        const newerArray=newArray.filter(callback);
        return newerArray;
    }
    else {
    const newArray=array.filter(callback);
    return newArray;
    }
}

function mySize(array){
    if (typeof(array)==='object'){
        let newArray=Object.values(array);
        const newerArray=newArray.length;
        return newerArray;
    }
    else {
    const newArray=array.length;
    return newArray;
    }
}

function myFirst(array,n){
    if (n>0){
    if (typeof(array)==='object'){
        let newArray=Object.values(array);
        let value= newArray.slice(0,n);
        return value;
    }
    else {
    let value=array.slice(0,n);
    return value;
    }
}
else {
    if (typeof(array)==='object'){
        let newArray=Object.values(array);
        let value= newArray[0];
        return value;
    }
    else {
    let value=array[0];
    return value;
    }
}
}


function myLast(array,n){
    if (n>0){
        let value=array.slice(-n);
        return (value);
    }
    else 
        {let value=array[array.length-1];
        return value;
        }
    
}

function myKeys(object){
    const array=Object.keys(object);
    return array;
}

function myValues(object){
    const array=Object.values(object);
    return array;
}







/*const chai = require('chai')
const spies = require('chai-spies-next')
chai.use(spies)
const expect = chai.expect
        const unmodifiedTestArr = [1, 2, 3, 4]
        const unmodifiedTestObj = {one: 1, two: 2, three: 3, four: 4}
        const alert = chai.spy();
    const testArr = [1, 2, 3, 4]
    const testObj = Object.assign({}, unmodifiedTestObj)
    const spy = chai.spy(x => true)
        myEach(unmodifiedTestObj,alert)*/
