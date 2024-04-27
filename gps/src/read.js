import 'dotenv/config'

import { getWeb3Provider } from "@iexec/dataprotector";
import { IExecOracleFactory } from "@iexec/iexec-oracle-factory-wrapper";

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""; 

const web3Provider = getWeb3Provider(PRIVATE_KEY);
const factory = new IExecOracleFactory(web3Provider);


const updateOracleRes = factory.updateOracle({
    cid: "QmcnFTSHEogWEhtXhRKaKPVrR3hmMk2xqERqAQTs9u7i9s", // Content ID of the Oracle
    targetBlockchains: ["134", "137"], // Target blockchain IDs, 137 for polygon, 134 for iExec (required)
  }).subscribe({
      next: (data) => {
        console.log("next", data);
      },
      error: (error) => {
        console.log("error", error);
      },
      complete: () => {
        console.log("Oracle update Completed");
      }, 
    });


const readOracleRes = await factory.readOracle(
    "QmcnFTSHEogWEhtXhRKaKPVrR3hmMk2xqERqAQTs9u7i9s",
    // Read chain ID - 
); // Content ID of the Oracle

console.log("Data: ", readOracleRes)
