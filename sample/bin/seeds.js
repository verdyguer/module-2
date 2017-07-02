//Define some celebities

const celebrity= [
    {
        name: "Pepi",
        ocupation: "Peluquera",
        cathPhrase: "Por los pelos",
    },
    {
        name: "Lucy",
        ocupation: "Camarera",
        cathPhrase: "Marchando Bravas",   
        
    },
    {
        name: "Bom",
        ocupation: "Cantante",
        cathPhrase: "Mi novio ha desaparecido",   
    }
];

//Save celebrities to the database, and close the connection://
Celebrity.create(celebrity, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach((celebrity) => {
    console.log(celebrity.name)
  });
  mongoose.connection.close();
});