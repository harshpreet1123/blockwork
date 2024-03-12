import mongoose from "mongoose";

// Set up mongoose connections
let freelancerDB: mongoose.Connection;
let clientDB: mongoose.Connection;

try {
  freelancerDB = mongoose.createConnection(
    `mongodb://localhost:27017/freelancerDB`
  );
  console.log("Freelancer DB connceted");
} catch (error) {
  console.error("Error connecting to freelancer database:", error);
  console.log("Client DB connceted");
}

try {
  clientDB = mongoose.createConnection(`mongodb://localhost:27017/clientDB`);
} catch (error) {
  console.error("Error connecting to client database:", error);
}

// Export connections
export { freelancerDB, clientDB };
