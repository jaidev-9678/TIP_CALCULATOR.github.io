const tipcalculator = () => {
    let amount = document.getElementById("billamt").value;
    if(amount === ""){
        alert("Please Enter Bill Amount");
        return;
    }
    else{
        document.getElementById("billamt").value; 
    }
    let percent = document.getElementById("serviceQual").value;

    let people = document.getElementById("peopleamt").value;

    if(people === "" || people <= 0){
        people = 1;

        document.getElementById("each").style.display = "none";
    }
    else{
        document.getElementById("each").style.display = "block";
    }
    let total = (amount * percent)/ people;
    total = Math.round(total * 100)/ 100;
    total = total.toFixed(2);
    document.getElementById("tipamt").innerHTML = total;
}
document.getElementById("calculate").onclick = () => {
    tipcalculator();
}
// const tipcalculator = () =>{
//     let billamount = document.getElementById("billamt").value;
//     let select = document.getElementById("serviceQual").value;
//     let peopleamt = document.getElementById("peopleamt").value;

//     if(billamount === ""){
//         alert("Please Enter Bill Amount");
//         return;
//     }
//     if(peopleamt === "" || peopleamt <= 0){
//         peopleamt = 1;

//         document.getElementById("each").style.display = "none";
//     }
//     else{
//         document.getElementById("each").style.display = "block";
//     }

//     let total = (billamount * select) / peopleamt;

//     total = Math.round(total * 100)/ 100;
//     total = total.toFixed(2);

//     document.getElementById("tip").style.display = "block";
//     document.getElementById("tipamt").innerHTML = total;
// }

// document.getElementById("tip").style.display = "none";
// document.getElementById("each").style.display = "none";

// document.getElementById("calculate").onclick = () => {
//     tipcalculator();
// }