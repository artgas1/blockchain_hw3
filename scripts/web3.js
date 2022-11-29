const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/e4c1d5e7067748d0a6309668e02135c2"));

// Получаем контракт
const addressOfContract = "0x0D931cB4DF5686316a28c8503E1d68Ae9eb8094C";

const contractInJson = require("../artifacts/contracts/GasparyanToken.sol/GasparyanToken.json");


const gettedContact = new web3.eth.Contract(contractInJson.abi, addressOfContract)
console.log("got contract")
gettedContact.methods.testSum().call().then(console.log)
