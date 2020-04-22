//exporter la fonction pour qu'elle soit visible ailleurs
exports.start = start;

//Récupération du module 'readline' qui gère les saisie utilisateur
var readline = require('readline');

//Création d'un objet permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//Fonction start qui gère l'affichage du menue
function start(){
	
	console.log('1. Lister les clients');
	console.log("99. Sortir");
	
	rl.question('-- Quel est votre choix ? --:', function(saisie_user){
		
		//vérifie la valeur de saisie de l'utilisateur
		console.log(`Vous avez saisie:${saisie_user}`);
		
		if( saisie_user == 1 )
		{
			console.log(">> Lister des clients");
			start();
		}
		else if( saisie_user == 99 )
		{
			console.log("Aurevoir");
			rl.close();
		}
		
	});
}