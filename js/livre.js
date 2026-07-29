/*
====================================
   PLATEFORME MESLOUHI
   Gestion des livres PDF
====================================
*/


const container = document.getElementById(
    "books-container"
);

const search = document.getElementById(
    "search"
);


let livres = [];



// Charger la bibliothèque

fetch("data/livres.json")

.then(response => response.json())

.then(data => {

    livres = data;

    afficherLivres(livres);

})

.catch(error => {

    console.error(
        "Erreur de chargement des livres : ",
        error
    );

});




// Afficher les livres

function afficherLivres(liste){


    container.innerHTML = "";


    if(liste.length === 0){

        container.innerHTML =
        "<p>Aucun livre trouvé.</p>";

        return;

    }



    liste.forEach(livre => {


        const carte = document.createElement(
            "div"
        );


        carte.className = "card book-card";


        carte.innerHTML = `

            <img 
            src="${livre.image}" 
            alt="${livre.titre}"
            >


            <h3>
                ${livre.titre}
            </h3>


            <p>
                Auteur : ${livre.auteur}
            </p>


            <p>
                Catégorie : ${livre.categorie}
            </p>


            <p>
                ${livre.description}
            </p>


            <a 
            href="${livre.pdf}" 
            target="_blank">
                📥 Télécharger PDF
            </a>

        `;


        container.appendChild(carte);


    });


}




// Recherche instantanée

search.addEventListener(
    "input",
    function(){


        const mot = search.value
        .toLowerCase();



        const resultat = livres.filter(
            livre =>


            livre.titre
            .toLowerCase()
            .includes(mot)


            ||

            livre.auteur
            .toLowerCase()
            .includes(mot)


            ||

            livre.categorie
            .toLowerCase()
            .includes(mot)

        );



        afficherLivres(resultat);


    }
);
