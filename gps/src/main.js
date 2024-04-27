import 'dotenv/config'

import { IExecDataProtector, getWeb3Provider } from "@iexec/dataprotector";
import { IExecOracleFactory } from "@iexec/iexec-oracle-factory-wrapper";

const PRIVATE_KEY = process.env.PRIVATE_KEY || ""; 

console.log(PRIVATE_KEY)

// get web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);

// instantiate
// const dataProtector = new IExecDataProtector(web3Provider);


const factory = new IExecOracleFactory(web3Provider);

// https://retoolapi.dev/pFIbcx/data


const createOracleRes = factory.createOracle({
    url: "https://662013b53bf790e070aeeff6.mockapi.io/api/position/Position/1",
    method: "GET",
    headers: {
    //   authorization: "%API_KEY%",
    },
    dataType: "string",
    JSONPath: "$.latitude",
    // apiKey: "MY_TEST_API_KEY",
  }).subscribe({
      next: (data) => {
        console.log("next", data);
      },
      error: (error) => {
        console.log("error", error);
      },
      complete: () => {
        console.log("Oracle Creation Completed");
      }, 
    });
    // Create ID 




// console.log("Loading ok...")

// console.log("Stored data...")

// const protectedData = await dataProtector.protectData({
//     data: {
//         // email: 'example@gmail.com',
//         latitude: "48.864716",
//         longitude: "2.349014"
//     }
// })


// console.log(protectedData)

// // console.log("Grant access...")
// // const grantedAccess = await dataProtector.grantAccess({
// //     protectedData: protectedData.address,
// //     authorizedApp: '0x00000000000000000000000000000000000000',
// //     authorizedUser: '0xaa6D6f90C4486D9ba32e574bF36379156b9D057f',
// //     pricePerAccess: 0,
// //     // numberOfAccess: 10
// // })

// // console.log(grantedAccess);


// console.log("Request data...")

// const listProtectedData = await dataProtector.fetchProtectedData({
//     owner: '0xaB505bFc93D91cDc7880b144BeEB8938E4fEebaa',
//     schema: {
//         "latitude": "string",
//         "longitude": "string",
//     }
// })

// console.log(listProtectedData)
