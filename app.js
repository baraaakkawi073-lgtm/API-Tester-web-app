async function testAPI(){

let url=document.getElementById("url").value;

let res=await fetch(url);

let data=await res.json();

document.getElementById("result").innerText=
JSON.stringify(data,null,2);

}
