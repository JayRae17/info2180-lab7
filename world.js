window.onload=function(){
    var httpRequest = new XMLHttpRequest();
    var button = document.getElementById('lookup');
    button.addEventListener('click',lkUp);

      function lkUp(){
        if (document.getElementById('check').checked==false) {
          getCountry(document.getElementById('country').value);
        }else{
          getAll();
        }
      }
    
     function getCountry(str){
       if(httpRequest.readyState===XMLHttpRequest.DONE){
         if(httpRequest.status===200){
           document.getElementById("result").innerHTML = this.responseText;
         }else{
           alert("There was an issue found with your request");
         }
       }
       httpRequest.open('GET','world.php?country='+str, true);
       httpRequest.send();
     }
     
    function getAll(){
      if(httpRequest.readyState===XMLHttpRequest.DONE){
        if(httpRequest.status===200){
          document.getElementById("result").innerHTML = this.responseText;
        }else{
          alert("There was an issue found with your request");
        }
      }
         httpRequest.open('GET','world.php?country=all=true', true);
         httpRequest.send();
   }
};