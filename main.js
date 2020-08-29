let confirmbutton = document.getElementById("mybtn");

confirmbutton.addEventListener("click", buttonclick);
let master = document.getElementById("mastercard");
let visa = document.getElementById("visacard");
let errors = document.getElementById("error");
let inputerrors = document.getElementById("inputerror")

master.style.display="none";
visa.style.display="none";
errors.style.display="none";
inputerrors.style.display="none";

 function buttonclick(){
        let input = document.getElementById("inputNumber").value;

        if(input.length >= 16){  
        if(input.startsWith(5)){
         console.log("It's a Mastercard!");
         master.style.display ="block";
         visa.style.display ="none";
         errors.style.display = "none"
         inputerrors.style.display="none";

        }
        else if(input.startsWith (4)){
         console.log(`It's a Visa Card!`);
         visa.style.display ="block";
         master.style.display ="none";
         errors.style.display = "none";
         inputerrors.style.display="none";
        }

    
        else if(input.startsWith (1),(2),(3),(6),(7),(8),(9)){
         console.log(`error`);
         errors.style.display = "block";
         visa.style.display ="none";
         master.style.display ="none";
         inputerrors.style.display="none";
        }

    }
        else{
            console.log(`input not complete`);
            inputerrors.style.display = "block";
            errors.style.display = "none";
           visa.style.display ="none";
            master.style.display ="none";
        }
     
   
}