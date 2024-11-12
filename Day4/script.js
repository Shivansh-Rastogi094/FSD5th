
// let y=18 // by changing the scope of the variable
// function display()
// {   
//     let a =15;
//     console.log(a);
//     let j=14
//     console.log(j);
// }
function validate()
 {
    // alert("Validated");
    let User=document.getElementById('Un').value
    let Pass=document.getElementById('pass').value
    let p1 =document.getElementById('result');
    if(User=="admin" && Pass=="admin")
    {
        p1.innerText = "Successfully Validated";
    }
    else{
        p1.innerText = "Not Validated";
    }
    
 }

//  let x = confirm("are you sure you want to logout");
//  alert(x);

// let v= prompt("enter your name","rahul");
// alert(v);

let disp=() => {
    console.log("welcome to arrow fn");
}

let sum = (x,y ) => {
    return x+y;
}

let res=sum(12,32);
console.log(res);