import { MongoClient} from "mongodb";

if (!process.env.MONGODB_URI) {
    throw new Error ('Invalid/Missing Environment Variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const option = {}

let client 
let clientPromise

if (process.env.NODE_ENV === "development") {
    // In dvlpt mode, use global variable so that the value
    // is preserved across module reloads caused by HMR(hot module replacement)
   
   if (!global.mongoClientPromise) {
        client = new MongoClient(uri, option)
        global.mongoClientPromise = client.connect()
    
   } 
   clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, option)
    clientPromise = client.connect()
}


// Export a module-scoped MongoClient promise. by doing this in 
// a separate module, the client can be shared across funtions 

export default clientPromise