const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.hi7lo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('Connected to MongoDB')

  client.db('Newdatabase').collection('citizens').insertMany([{
    name: 'Webster McDermott',
    city: 'Savannah',
    avatar: ' https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/108.jpg ',
    pass: '$2a$10$/qRWZn7but26HdZGmCkMSOyj24TEojI8wRXqW.ljHNX8E2LRdtIiO',
  },
  {
    name: 'Hillard Wisozk',
    city: 'Noblesville',
    avatar: ' https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/255.jpg',
    pass: '$2a$10$./5RTy8G7jiiqUKkwFFbAuxS14WVncbEyP4cOKw1CDSdZ.vr6Sn4i',
  }]).then(result => {
    console.log(result);
  });

  //client.db().admin().listDatabases().then(result =>{
  //  console.log(result['databases'][6]);
  //})

  //client.db('sample_training').listCollections().toArray().then(result=>{
  //  console.log(result);
  //})

  //client.db('sample_training').collection('trips').find({'birth year': 1972}).toArray().then(result=>{
  //  console.log(result);
  //})


  //client.db().admin().listDatabases().then(result =>{
    //console.log(result);
  //})
  //const collection = client.db("test").collection("devices");
   //perform actions on the collection object
  //client.close();
  

  //client.db('sample_training').collection('inspections').findOne().then(result => {
     //console.log(result);
  //})

  //client.db('sample_training').listCollections().toArray().then(result => {
  //   console.log(reult);
  //})
});

