
    var i, j, k;
    
    document.write("<table border='1px'>");

    document.write("<tr style='font-size:30px;color:#fff;background-color:#000;'>");

    for(i = 1; i <=10; i++)
    {
        document.write("<th> [ " + i + " ]</th>");
    }

 document.write("</tr>"); 

for(k = 1; k<11; k++)
{
    var colorCode = "";
    if(k%2 === 0)
    {
        colorCode = "#eee";
    }else{
        colorCode = "#99e265";
    }

    document.write("<tr style='background-color:"+ colorCode +"'>");

    for(j= 1; j< 11; j++)
    {
     document.write("<td style='font-size:23px;'>"+j+" X "+ k + " = " + j*k + "</td>")   
    }

     document.write("</tr>"); 
}

document.write("</table>");

