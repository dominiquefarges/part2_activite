var nombre, centaine, dizaine, unite;

var tableauCentaineUnite = ["un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf"];

var tableauDizaine = ["dix", "vingt", "trente", "quarante", "cinquante", "soixante", "quatre-vingt", "onze", "douze", "treize", "quatorze", "quinze", "seize"];

var nombreEnLettres = " "; // Le nombre écrit en lettres

var valid = true; // Teste la validité du nombre 
var proceed = true; // Pour continuer ou arrêter

function convert(nombre) {
// Calcul des centaines, dizaines, unités
unite = nombre % 10;
centaine = (nombre - (nombre % 100)) / 100;
dizaine = (nombre - ((centaine * 100) + unite)) / 10;

// traitement centaine = 0
if (centaine === 0) {
	nombreEnLettres = " "; 
	if ((centaine + dizaine + unite) === 0) {
		nombreEnLettres = "zero";
	}
}

// traitement centaine = 1	
if (centaine === 1){
		nombreEnLettres = "cent";		
}

// traitement centaine = 2, 3, 4, 5, 6, 7, 8 ,9 
if (centaine > 1) {
		nombreEnLettres = tableauCentaineUnite[centaine - 1] + "-" + "cent";
}

// Ajout d'un "s" à cent
if (centaine > 1 && dizaine === 0 && unite === 0) {
		nombreEnLettres += "s";
}

// Ajout d'un "-" si centaine !== 0 
if (centaine !==0 && (dizaine !== 0 || unite !== 0)) {
		nombreEnLettres += "-";
}

// traitement dizaine = 0
if (dizaine === 0) {
		if (unite === 0) {
    		nombreEnLettres += " ";
    } else {
    		nombreEnLettres += (tableauCentaineUnite[unite - 1]);
    }
}

// traitement dizaine = 1
if (dizaine === 1) {
		if (unite === 0) {
    		nombreEnLettres += (tableauDizaine[dizaine - 1]);
    }
    if (unite >= 1 && unite <= 6) {
    		nombreEnLettres += (tableauDizaine[unite + 6]);
    } 
    if (unite >= 7 && unite <= 9) {
    		nombreEnLettres += (tableauDizaine[dizaine - 1] + "-" + tableauCentaineUnite[unite - 1]);
    }
}

// traitement dizaine = 2, 3, 4, 5, 6
if (dizaine >= 2 && dizaine <= 6) {
		if (unite === 0) {
    		nombreEnLettres += (tableauDizaine[dizaine - 1]);
    }
    if (unite === 1) {
    		nombreEnLettres += (tableauDizaine[dizaine - 1] + " et " + tableauCentaineUnite[unite - 1]);
    }
    if (unite > 1) {
    		nombreEnLettres += (tableauDizaine[dizaine - 1] + "-" + tableauCentaineUnite[unite-1]);
    }
}

// traitement dizaine = 7
if (dizaine === 7) {
		if (unite === 0) {
    		nombreEnLettres += (tableauDizaine[dizaine - 2] + "-" + tableauDizaine[unite]);
    }
    if (unite === 1) { 
    		nombreEnLettres += (tableauDizaine[dizaine - 2] + " et " + tableauDizaine[unite + 6]);
    }
    if (unite >=2 && unite <= 6) {
    		nombreEnLettres += (tableauDizaine[dizaine - 2] + "-" + tableauDizaine[unite + 6]);
    }
    if (unite >= 7 && unite <= 9) {
    		nombreEnLettres += (tableauDizaine[dizaine - 2] + "-" + tableauDizaine[0] + "-" + tableauCentaineUnite[unite - 1]);
    }
}


// traitement dizaine = 8
if (dizaine === 8) {
		if (unite === 0) {
    		nombreEnLettres += (tableauDizaine[dizaine - 2] + "s");
    }
    if (unite >= 1 && unite <= 9) {
    		nombreEnLettres += (tableauDizaine[dizaine - 2] + "-" + tableauCentaineUnite[unite - 1]);
    }
}

// traitement dizaine = 9
if (dizaine === 9) {
		if (unite === 0) {
    		nombreEnLettres += (tableauDizaine[dizaine - 3] + "-" + tableauDizaine[unite]);
    }
    if (unite >=1 && unite <= 6) {
    		nombreEnLettres += (tableauDizaine[dizaine - 3] + "-" + tableauDizaine[unite + 6]);
    }
    if (unite >= 7 && unite <= 9) {
    		nombreEnLettres += (tableauDizaine[dizaine - 3] + "-" + tableauDizaine[0] + "-" + tableauCentaineUnite[unite - 1]);
    }
}

return nombreEnLettres;
}


// Solicitation du nombre à convertir en lettres et conversion en numérique
while (proceed) {
		nombre = parseInt((prompt("Entrez un nombre de 0 à 999")),10);
		if (valid) {
			convert(nombre);
    		alert("Le nombre " + nombre + " s'écrit en lettres: " + nombreEnLettres +".");   
		}
		else {
			proceed = false;
		}			
}

