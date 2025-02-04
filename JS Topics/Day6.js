// PUSH(add element to the variable at end), 
// POP(Delete element to the variable at end), 
// UNSHIFT(add element to the variable at start), 
// SHIFT( element to the variable at end), 
// SLICE, SPLICE

// function fun(){
//     let arr = ["apple", "banana", "cherry"];
//     arr.push("grape");
//     console.log(arr);
// }
// fun();

// function fun1(){
//     let arr1 = ["apple", "banana", "cherry"]
//     arr1.pop();
//     console.log(arr1);
// }
// fun1();

// function fun(){
//     let arr = ["apple", "banana", "cherry"];
//     arr.unshift("graps");
//     console.log(arr)
// }
// fun();

// function fun(){
//     let arr = ["apple", "banana", "cherry"];
//     arr.shift();
//     console.log(arr)
// }

// let arr = ["apple", "banana", "graps", 1, 2, 3, 45];
// console.log(arr[4]);

// let arr = [1, 2, 3, 4];
// arr.pop();
// console.log(arr);

// let arr = ["apple", "banana", "cherry", "grape"];
// let arr1 = arr.slice(1, 3);
// console.log(arr1);

// let arr = [1,2,3,4,5,6,7,8];
// let arr1 = arr.slice(2, 7)
// console.log(arr1);//3,4,5,6,7

// var arr = [1, 2, 3, 4, 5, 6];
// function fun(){
    // arr.push(7, 8, 9, 10);
    // arr.pop(2);
    // arr.unshift(0, 1/);
    // arr.shift();
    // let arr1 = arr.slice(1, 2);
    // let arr1 = arr.splice(2);
//     console.log(arr1);
// }
// fun();

// var arr = ["apple", "banana", "grapes"];
// arr.push("Charry");
// arr.pop();
// arr.unshift("Charry");
// arr.shift();
// arr.slice(1);
// arr.splice();
// console.log(arr);

function fun(){
    for(let i = 10; i > 9; i++){
        if(i <= 10){
            console.log("Good Morning")
        }else{
            console.log("Good Afternoon")
        }
    }
}


// Method	Purpose	                                            Returns        	Modifies Original?

// forEach	Iterates over the array, no return value	        Undefined           	No
// map	    Transforms each element and creates a new array	    New array           	No
// filter	Filters elements based on a condition	            New array           	No
// reduce	Reduces to a single value	                        Single value           	No
// sort	    Sorts elements                                    	Sorted array        	Yes

