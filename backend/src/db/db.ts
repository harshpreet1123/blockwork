import mongoose from "mongoose";

// Set up mongoose connections
let freelancerDB: mongoose.Connection;
let clientDB: mongoose.Connection;
let jobDB: mongoose.Connection;

try {
  freelancerDB = mongoose.createConnection(
    `mongodb://localhost:27017/freelancerDB`
  );
  console.log("Freelancer DB connceted");
} catch (error) {
  console.error("Error connecting to freelancer database:", error);
}

try {
  clientDB = mongoose.createConnection(`mongodb://localhost:27017/clientDB`);
  console.log('Client DB connected');
} catch (error) {
  console.error("Error connecting to client database:", error);
}

try{
  jobDB = mongoose.createConnection('mongodb://localhost:27017/jobsDB');
  console.log('Jobs DB connected');
}catch(error){
  console.error("Error Connecting to Jobs DB: ", error);
}

// Export connections
export { freelancerDB, clientDB, jobDB };
