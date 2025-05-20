const restaurant = {
  nom: "Chez Oli",
  ouvert: true,
  commandes: [
    {
      table: 1,
      client: "Olivier",
      plats: [
        { nom: "Burger", prix: 12.5 },
        { nom: "Frites", prix: 4 }
      ]
    },
    {
      table: 2,
      client: "Aurélio",
      plats: [
        { nom: "Salade César", prix: 9 },
        { nom: "Eau plate", prix: 2 }
      ]
    },
    {
      table: 1,
      client: "Olivier",
      plats: [
        { nom: "Café", prix: 2.5 }
      ]
    },
    {
      table: 3,
      client: "Charlotte",
      plats: [
        { nom: "Pâtes aux champignons", prix: 11 },
        { nom: "Verre de vin rouge", prix: 5 }
      ]
    },
    {
      table: 4,
      client: "Lorian",
      plats: [
        { nom: "Nuggets", prix: 6 },
        { nom: "Compote", prix: 3 },
        { nom: "Jus de pomme", prix: 2 }
      ]
    },
    {
      table: 5,
      client: "Hugo",
      plats: [
        { nom: "Purée carottes", prix: 4 },
        { nom: "Petit pot dessert", prix: 2.5 }
      ]
    },
    {
      table: 6,
      client: "Thomas",
      plats: [
        { nom: "Pizza Margherita", prix: 10 },
        { nom: "Bières artisanale", prix: 4.5 }
      ]
    },
    {
      table: 3,
      client: "Charlotte",
      plats: [
        { nom: "Tiramisu", prix: 5.5 }
      ]
    },
    {
      table: 7,
      client: "Aurélie",
      plats: [
        { nom: "Steak frites", prix: 14 },
        { nom: "Coca zéro", prix: 3 }
      ]
    }
  ]
};

// const commandesParTable = {};

// restaurant.commandes.forEach(commande => {
//     const table = commande.table;

//     if(!commandesParTable[table]){
//         commandesParTable[table] = {
//             client:commande.client,
//             plats:[...commande.plats]
//         }
//     }
//         else{
//             commandesParTable[table].plats.push(...commande.plats);
//     }
// }
// )

// console.log(commandesParTable);

// Object.keys(commandesParTable).forEach( numTable =>{

//     const element = document.querySelector(`[data-num="${numTable}"]`);
//     const subelem = document.querySelector(`[data-num="${numTable}"] > summary`);
//     const client = document.createElement("p");
//     const ul= document.createElement("ul");
//     let totale=0;
//     commandesParTable[numTable].plats.forEach(plat =>{
//         const li = document.createElement("li");
//         li.textContent = `${plat.nom} - ${plat.prix}€`;
//         totale += plat.prix;
//         ul.append(li);
//     })
//     totale.toFixed(2)
//     subelem.textContent +=` ---- Totale: ${totale}€`;
//     client.textContent =`Client: ${commandesParTable[numTable].client}`;
//     element.append(client);

//     element.append(ul);

// })

const commandeParTable = [];

restaurant.commandes.forEach( commande => {
  // console.log(commande);
  const table = commande.table;
  // console.log(commande.table);
  if(!commandeParTable[table]){
    
    commandeParTable[table] = {
      client : commande.client,
      plats : commande.plats.slice()//important sinon  on ne cree pas de copie mais on pointe vers le meme tableau
    }
  }else{
    commande.plats.forEach(plat =>{
      commandeParTable[table].plats.push(plat);
    })
  }
  console.log("Etat au moment du log:", JSON.stringify(commandeParTable[table]));

  
});


commandeParTable.forEach( (table, index) =>{
  console.log(index);
    const element = document.querySelector(`[data-num="${index }"]`);
    const subelem = document.querySelector(`[data-num="${index }"] > summary`);
    console.log(element);
    console.log(subelem);
    const client = document.createElement("p");
    const ul= document.createElement("ul");
    let totale=0;
    table.plats.forEach(plat =>{
        const li = document.createElement("li");
        li.textContent = `${plat.nom} - ${plat.prix}€`;
        totale += plat.prix;
        ul.append(li);
    })
    totale.toFixed(2)
    subelem.textContent +=` ---- Totale: ${totale}€`;
    client.textContent =`Client: ${table.client}`;
    element.append(client);

    element.append(ul);

})