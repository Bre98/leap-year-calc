
    document.getElementById('demo').style.display='none';
    const cardContent = document.querySelector('.flip');
    
    
    
    
    
    
    function chkyr(){
    var chk = document.getElementById('yr').value;
    var result = document.getElementById('demo');
   
    
    if((chk % 400==0) || ((chk %100 !=0) && (chk % 4==0)))
    {
        result.style.display = "block";
        document.getElementById('demo').innerHTML = chk + ' is a leap year!';
        
    }
    else
    {
        result.style.display = "block";
        document.getElementById('demo').innerHTML = chk + ' is not a leap year.';
        
    }
    
}





