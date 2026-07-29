/*
====================================
   PLATEFORME MESLOUHI
   Script général
====================================
*/


// Message de bienvenue dans la console

console.log(
    "Bienvenue sur la Plateforme MESLOUHI 📚"
);



// Animation simple du bouton

document.addEventListener(
    "DOMContentLoaded",
    function(){

        const buttons = document.querySelectorAll(".btn");


        buttons.forEach(
            function(button){

                button.addEventListener(
                    "mouseenter",
                    function(){

                        button.style.transform = "scale(1.05)";

                    }
                );


                button.addEventListener(
                    "mouseleave",
                    function(){

                        button.style.transform = "scale(1)";

                    }
                );

            }
        );


    }
);
