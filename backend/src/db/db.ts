import mongoose from "mongoose";

// Set up mongoose connections
const dbConString='mongodb://localhost:27017'
let freelancerDB: mongoose.Connection;
let clientDB: mongoose.Connection;
let jobDB: mongoose.Connection;

try {
  freelancerDB = mongoose.createConnection(
    `${dbConString}/freelancerDB`
  );
  console.log("Freelancer DB connceted");
} catch (error) {
  console.error("Error connecting to freelancer database:", error);
}

try {
  clientDB = mongoose.createConnection(`${dbConString}/clientDB`);
  console.log('Client DB connected');
} catch (error) {
  console.error("Error connecting to client database:", error);
}

try{
  jobDB = mongoose.createConnection(`${dbConString}/jobsDB`);
  console.log('Jobs DB connected');
}catch(error){
  console.error("Error Connecting to Jobs DB: ", error);
}finally{
  console.log(`DB running at ${dbConString}`);
}

// Export connections
export { freelancerDB, clientDB, jobDB };
