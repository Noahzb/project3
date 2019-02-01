

const Web3 = require('web3');
const endpoint = 'wss://mainnet.infura.io/ws';
const web3 = new Web3(new Web3.providers.WebsocketProvider(endpoint));
const contractAddress = '0xb3775fb83f7d12a36e0475abdd1fca35c091efbe';
const abi = [{
    "constant": true, "inputs": [{ "name": "_customerAddress", "type": "address" }], "name": "dividendsOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability":
        "view", "type": "function"
}, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" },
{ "constant": true, "inputs": [{ "name": "_ethereumToSpend", "type": "uint256" }], "name": "calculateTokensReceived", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, {
    "constant": true, "inputs": [{ "name": "_tokensToSell", "type": "uint256" }], "name": "calculateEthereumReceived", "outputs": [{ "name": "", "type": "uint256" }], "payable"
        : false, "stateMutability": "view", "type": "function"
}, {
    "constant": true, "inputs": [], "name": "onlyAmbassadors", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability"
        : "view", "type": "function"
}, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" },
{ "constant": true, "inputs": [{ "name": "", "type": "bytes32" }], "name": "administrators", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" },
{ "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, {
    "constant": true, "inputs": [], "name": "sellPrice", "outputs": [
        { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
}, { "constant": true, "inputs": [], "name": "stakingRequirement", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, {
    "constant": true, "inputs": [{ "name": "_includeReferralBonus", "type": "bool" }], "name"
        : "myDividends", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
}, {
    "constant": true, "inputs": [], "name": "totalEthereumBalance", "outputs":
        [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
}, {
    "constant": true, "inputs": [{ "name": "_customerAddress", "type": "address" }], "name": "balanceOf", "outputs": [
        { "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
}, {
    "constant": false, "inputs": [{ "name": "_amountOfTokens", "type": "uint256" }], "name": "setStakingRequirement", "outputs": [],
    "payable": false, "stateMutability": "nonpayable", "type": "function"
}, {
    "constant": true, "inputs": [], "name": "buyPrice", "outputs": [{
        "name": "", "type": "uint256"
    }], "payable": false, "stateMutability": "view", "type": "function"
}, {
    "constant": false, "inputs": [{
        "name": "_identifier", "type": "bytes32"
    }, { "name": "_status", "type": "bool" }],
    "name": "setAdministrator", "outputs": [],
    "payable": false, "stateMutability": "nonpayable", "type": "function"
}, {
    "constant": true, "inputs": [],
    "name": "myTokens", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function"
}, {
    "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function"
}, { "constant": false, "inputs": [], "name": "disableInitialStage", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_toAddress", "type": "address" }, { "name": "_amountOfTokens", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_symbol", "type": "string" }], "name": "setSymbol", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_name", "type": "string" }], "name": "setName", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, {
    "constant": false, "inputs": [{ "name": "_amountOfTokens", "type": "uint256" }], "name":
        "sell", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
}, {
    "constant": false, "inputs": [], "name": "exit", "outputs": [], "payable": false, "stateMutability":
        "nonpayable", "type": "function"
}, { "constant": false, "inputs": [{ "name": "_referredBy", "type": "address" }], "name": "buy", "outputs": [{ "name": "", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [], "name": "reinvest", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, {
    "anonymous": false, "inputs": [{ "indexed": true, "name": "customerAddress", "type": "address" },
    { "indexed": false, "name": "incomingEthereum", "type": "uint256" }, {
        "indexed":
            false, "name": "tokensMinted", "type": "uint256"
    }, { "indexed": true, "name": "referredBy", "type": "address" }], "name": "onTokenPurchase", "type": "event"
}, { "anonymous": false, "inputs": [{ "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "tokensBurned", "type": "uint256" }, { "indexed": false, "name": "ethereumEarned", "type": "uint256" }], "name": "onTokenSell", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "ethereumReinvested", "type": "uint256" }, { "indexed": false, "name": "tokensMinted", "type": "uint256" }], "name": "onReinvestment", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "customerAddress", "type": "address" }, { "indexed": false, "name": "ethereumWithdrawn", "type": "uint256" }], "name": "onWithdraw", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "tokens", "type": "uint256" }], "name": "Transfer", "type": "event" }]


 
async function getData(data) {
    const contract = new web3.eth.Contract(abi, contractAddress);
    let sellPrice = await contract.methods.sellPrice().call();
    let buyPrice = await contract.methods.buyPrice().call();
    let truBuy = ("current p3d buy price" + " " + (web3.utils.fromWei(buyPrice, 'ether') + ' ETH'));
    let truSell = ("current p3d buy price" + " " + (web3.utils.fromWei(sellPrice, 'ether') + ' ETH'))
    console.log(truBuy);
    console.log(truSell);
    data = [truBuy,truSell];
    return data


}



   


// Consult the assignment files from earlier in class
// if you need a refresher on Cheerio.

// Dependencies
var express = require("express");

var app = express ();

  
$( "#pullboi" ).click(getData().then(function(data) {  
app.get("/", function(req, res) {
    res.send(data);
    })}));
// Main route (simple Hello World Message)



// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
