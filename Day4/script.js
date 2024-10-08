
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