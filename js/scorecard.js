function t() {
var a,b,scored
a=Number(document.getElementById("par").value);
b=Number(document.getElementById("strokes").value);


if(b==1)
	{scored = "Hole-in-one!";}
else if(a <= b - 2)
	{scored = "Eagle";}
else if(a == b - 1)
	{scored = "Birdie";}
else if(b==a)
	{scored = "Par";}
else if(a == b + 1)
	{scored = "Bogey";}
else if(a == b + 2)
	{scored = "Double Bogey";}
else
	{scored = "Go Home!";}
	
document.getElementById("score").value= scored;
}