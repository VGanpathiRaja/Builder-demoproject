const form = document.getElementById("customersinfo");
      form.addEventListener("submit",function(event) {
      event.preventDefault();
  
  const x = document.getElementById("firstname").value;
  const y = document.getElementById("email").value;
  const z = document.getElementById("mnumber").value;
  const d = document.getElementById("floor").value;
  const t = document.getElementById("Occupation").value;
  const w = document.getElementById("Designation").value;
  const i = document.getElementById("currentaddress").value;
  const l = document.getElementById("messeges").value;


if (!x || !y || !z || !d || !t || !w || !l){  
alert("important values so fill");
return;
}

alert("Full Name:" + x);
alert("Email:" + y);
alert("Mobile Number :" + z);
alert("Floor:" + d);
alert("Occupation:" + t);
alert("Designatinon:" + w);
alert("Current Address:"+i);
alert("Messeges:" + l);
});