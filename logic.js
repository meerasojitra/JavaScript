function printNo(n){
    document.writeln("<h2>No 1 to 100</h2><br>");
    for(var i=1;i<=n;i++){
        document.writeln(i);
       // document.write("<br>");
    }
}
    printNo(100)

/*** odd number ****/
function noOdd(){
    document.writeln("<h2>Odd no between 1 to 100</h2><br>");
    for(var i=1;i<=100;i++){
        if(i%2==1){
            document.writeln(i);
        }
    }
}
noOdd()

/*** even no ***/
function noEven(n){
    document.writeln("<h2>even no between 1 to 100</h2><br>");
    for(var i=1;i<=n;i++){
        if(i%2==0){
            document.writeln(i);
        }
    }
}
noEven(100)
