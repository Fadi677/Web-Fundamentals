var count=3;
var likes = document.querySelector("#likesnumber1");
console.log(likes);
function likes_counter(){
    count++;
    likesnumber1.innerText=count+" like(s)";
    console.log(count);
}