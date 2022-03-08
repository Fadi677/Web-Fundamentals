var header1=document.querySelector("#head1");
console.log(header1);

function editme(){
    header1.innerHTML=("Fadi Abuaita");
    console.log("click me");
}


function respond(fadi){ //function respond('todd')
    var answer1=document.getElementById(fadi); // document.getElementById('todd')
    var decrease = document.querySelector("#textrequests")
    // var decrease = document.querySelector(".button h1")
    console.log(answer1);
    answer1.remove();
    
    console.log(decrease);
    console.log(decrease.innerHTML)
    decrease.innerHTML--;
}

