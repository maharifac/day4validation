/*console.dir(document);
console.log(document.URL);
console.log(document.title);
document.title="validation";
console.log(document.all[7]);*/

/*console.log(document.getElementById("intro"));
let store= document.getElementById("intro");
console.log(store.textContent);
store.textContent="new topic";
store.innerHTML='<h1>"be cool"</h1>';
document.getElementById("identity").innerHTML='<p>qwertyyu</p>';*/
let hold=document.getElementsByClassName('heading');
hold[1].textContent="ret46y6";
hold[1].style.borderBottom="solid 3px black";
// hold[1].style.backgroundColor="green";
// for(var i=0;i<hold.length;i++)
// {
//     hold[i].style.backgroundColor="yellow";
// }

// tagname
let safe=document.getElementsByTagName('h1');
safe[1].textContent="tag text changed";

//query selector
let area=document.querySelector("input");
area.value="pling!!!!";

//using id
area=document.querySelector("#text");
area.value="pling!!!!";

//queryselector
let submit=document.querySelector('input[type="submit"]');
submit.value='send';

function myFunction()
{
    let shoes=document.querySelector('.lichild');
shoes.style.color='red';
let lastitem=document.querySelector('.lichild:last-child');
lastitem.style.color="blue";
}
//nth selector
let seconditem=document.querySelector('.lichild:nth-child(2)');
seconditem.style.color="green";
function onloadfunction()
{
alert("new alert");
}
function myfunction(val)
{
    alert("new value:"+val);
}
function myfunction(val)
{
    alert("ckjhkd:"+val);
}

