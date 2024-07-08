const { MongoClient } = require('mongodb')
    // const url = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
    // MongoClient.connect(url, function(err, db) {
    //     if (err) throw err;
    //     console.log("Database created!");
    //     db.close();
    // });


// async function main() {

//     const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";


//     const client = new MongoClient(uri);

//     try {

//         await client.connect();


//         await listDatabases(client);

//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }
// }
// main().catch(console.error);