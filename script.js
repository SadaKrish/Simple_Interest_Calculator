function compute()
{
    var amount=document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years= document.getElementById("years").value;
    var result=document.getElementById("result").value;
	var year=new Date().getFullYear()+parseInt(years);
	var interest=(amount*rate*years)/100;
	 document.getElementById("result").innerHTML="If you deposit <mark>"+amount+"</mark>,<br> at an interest rate of <mark>"+rate+"%</mark>. <br>You will recieve an amount of <mark>"+interest+"</mark>, <br> in the year <mark>"+year+".</mark>";
     
    // console.log
}
 function checkAmount(){
     	var amount=document.getElementById("principal").value;
     	if (amount<1){
 			alert("Enter a positive number.");    
 			document.getElementById("principal").focus();   
     	}
 }

function updateRate()
{
	var rateval= document.getElementById("rate").value;
	document.getElementById("rate_val").innerText=rateval+"%";
}



