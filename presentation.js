//exporter la fonction pour qu'elle soit visible ailleurs
exports.start = start;

//Récupération du module 'readline' qui gère les saisie utilisateur
var readline = require('readline');
let service = require('./service')
//Création d'un objet permettant de récupérer la saisie utilisateur
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

//Fonction start qui gère l'affichage du menue
function start(){
	
	console.log('1. Lister les clients\n2. Ajouter un client');
	console.log("99. Sortir");
	
	rl.question('-- Quel est votre choix ? --:', function(saisie_user){
		
		//vérifie la valeur de saisie de l'utilisateur
		console.log(`Vous avez saisie:${saisie_user}`);
		
		if( saisie_user == 1 )
		{
			console.log(">> Lister des clients");
            service.listerClient(
                function (listeClient) {
                    listeClient.forEach(el => console.log(el.nom + ' ' + el.prenoms))
                    start()
                }, function (err) {
                    console.log('oops', err)
                    start()
                })
        }
		if( saisie_user === '2' )
		{
			rl.question('Entrer le nom : ', function (saisieNom) {

                rl.question('Entrer le prenom du client : ', function (saisiePrenom) {

                    service.ajouterClient(saisieNom, saisiePrenom, function (clientAjoute) {
                        console.log('Client créé uuid =', clientAjoute.uuid);
                        start()
                    }, function (err) {
                        console.log('oops', err)
                        start()
                    })

                })
            })
		}
		else if( saisie_user == 99 )
		{
			console.log("Aurevoir");
			rl.close();
		}
		
	});
}