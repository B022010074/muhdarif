const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.hi7lo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  if (err) {
    console.log(err.message)
    return
  }
  console.log('Connected to MongoDB')

  client.db().admin().listDatabases().then(result =>{
    console.log(result['databases'][0]);
  })
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
  

  //client.db('sample_training').collection('zips').find({ 'state': 'NY' })
  //   console.log(result);
  //})

  //client.db('sample_training').listCollections().toArray().then(result => {
  //   console.log(reult);
  //})
});

