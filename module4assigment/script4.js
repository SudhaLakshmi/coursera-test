var a=new Array();
var ch='y';
var i=0;


 do
 {
 	a[i]=prompt("enter name");
 	
 	    i++;
 	 ch= prompt("Want to continue");
 	    
}while(ch=='y'||ch=='Y');
 	


for (var i=0;i<a.length;i++)
 {
 	var j=0;
 	if(a[i].length!=0)
 	 {
 	if(a[i][j]=='j'||a[i][j]=='J')
 	{
 		console.log("Goodbye "+ a[i])
 	}
 
 else{
 	 console.log("HELLO "+ a[i]);
 }
 }
 else{console.log("No elements");}
}