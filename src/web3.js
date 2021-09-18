//OLD METHOD
//import Web3 from 'web3';
//'Web3' is the constructor function

// const web3 = new Web3(window.web3.currentProvider);
//instance of web3 'const web3 = new Web3'
//'(window.web3.currentProvider)' ripping out default injected provider of web3 v0.20 that has been provided by metamask
//'window.web3' MetaMask injects web3 onto to 'web3' global var
//this 'web3' is the copy of web3 coming from the MetaMask library
//'currentProvider' property is the provider that is installed or given to that copy of web3

// export default web3;

//NEW METHOD
import Web3 from "web3";

window.ethereum.request({ method: "eth_requestAccounts" });

const web3 = new Web3(window.ethereum);

export default web3;