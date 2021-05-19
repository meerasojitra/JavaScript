//101 Remove All Whitespaces From a Text
    function removeSpace(){
        var st;
        st= document.getElementById('st').value;
        var op =st.split(' ').join('');

        document.getElementById('result').innerHTML ="New text is " +"<b>" +op +"</b>";
    }
 
