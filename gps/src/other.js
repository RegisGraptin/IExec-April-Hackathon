import 'dotenv/config'

import { IExecDataProtector, getWeb3Provider } from "@iexec/dataprotector";

const PRIVATE_KEY = "1f8c339d5d9cc7854c48f7d2b611b5831e8469bea29eb1a243a0213db854e8b9"; 

console.log(PRIVATE_KEY)

// get web3 provider from a private key
const web3Provider = getWeb3Provider(PRIVATE_KEY);

// instantiate
const dataProtector = new IExecDataProtector(web3Provider);

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

// console.log("Grant access...")
// const grantedAccess = await dataProtector.grantAccess({
//     protectedData: protectedData.address,
//     authorizedApp: '0x00000000000000000000000000000000000000',
//     authorizedUser: '0xaa6D6f90C4486D9ba32e574bF36379156b9D057f',
//     pricePerAccess: 0,
//     // numberOfAccess: 10
// })

// console.log(grantedAccess);


console.log("Request data...")

const listProtectedData = await dataProtector.fetchProtectedData({
    owner: '0xaB505bFc93D91cDc7880b144BeEB8938E4fEebaa',
    schema: {
        "latitude": "string",
        "longitude": "string",
    }
})

console.log(listProtectedData)
