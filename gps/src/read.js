import 'dotenv/config'

import { getWeb3Provider } from "@iexec/dataprotector";
import { IExecOracleFactory } from "@iexec/iexec-oracle-factory-wrapper";

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""; 

const web3Provider = getWeb3Provider(PRIVATE_KEY);
const factory = new IExecOracleFactory(web3Provider);

const readOracleRes = await factory.readOracle(
    "QmcnFTSHEogWEhtXhRKaKPVrR3hmMk2xqERqAQTs9u7i9s"
); // Content ID of the Oracle

console.log("Data: ", readOracleRes)
