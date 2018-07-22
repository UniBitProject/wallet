"use strict";

const assert = require('assert');
var address1;
var issuedata;
var listassets;
var totalbalance;
var listwallettransactions;
const connection = {
    port: "2900",
    host: '127.0.0.1',
    user: "multichainrpc",
    pass: "9mMUBoAZGiQQwfGMguFrj2DfMfdgHdyydR4GyhTiHLxH"
} 
const bluebird = require("bluebird");
console.log("Connecting....")
const multichain = bluebird.promisifyAll(require("../index.js")(connection), {suffix: "Method"}); 
console.log("***********Connection established*********")

function getInfo(req,resp) {
    console.log("Calling Get info Method...");
   // return true;
multichain.getInfo((err, res) => {
        console.log(res);
    })
}
//list all assets method

 /* function listAssets(req,resp) 
{
    console.log("Calling List Assets Method...");
   // return true;
    multichain.listAssetsMethod()
	.then (listassetsresp => {
		assert(listassetsresp , "Could not get new address")
		listassets=listassetsresp ;
		console.log(listassets);
	})
	
}  */

//Get new address and validate it

/* function getNewVarifiedaddress()    
{   
console.log("Calling Get New Address Method...");
	 multichain.getNewAddressMethod()
      .then(address => {
        assert(address, "Could not get new address")
        address1 = address; 
		console.log(address1)
        return multichain.validateAddressMethod({address: address1})
    })
	
}  */

  function getTotalBalance()
{
	multichain.getTotalBalancesMethod({minconf: 1})
	.then (totalbalanceresp => {
		assert(totalbalanceresp, "Could not get new address")
		totalbalance=totalbalanceresp;
		console.log(totalbalance);
	})
} 
 

/* function listWalletTransactions()
{
	multichain.listWalletTransactionsMethod({count: 10})
	.then(wallettransresp => {
		assert(wallettransresp, "Could not wallet transactions")
		listwallettransactions=wallettransresp;
		console.log(listwallettransactions);
	})
} */

// issue Assets

/* function createAssets ()
{
console.log("Calling Issue Assets Method...");
multichain.issueMethod(
		 issuedata = {
			address: "133H9FFJ9Uhbivv97QZgHTDzQh1D2e8YPCMvmv", 
            asset: { name: "ashish2",open: true },
            qty: 1000, 
            units: 0.1
        }, (err, res) => {
    console.log('Txn id of Block is  : ' +res)
})
}  */

/* function sendAssets ()
{
console.log("Calling Send Assets Method...");
multichain.sendAssetFromMethod({
            from: "1bWzkMJ6cicQjDA4yi86favKX15tmJy1dkEGBP",
            to: "1bWzkMJ6cicQjDA4yi86favKX15tmJy1dkEGBP",
            asset: "asset_chk1",
            qty: 10
        },(err, res) => {
    console.log('Txn id of Block is  : ' +res)
	console.log(err);
		})
		
}  */

/* function sendAssetswithdata ()
{
console.log("Calling Send Assets Method...");
multichain.sendWithMetadataFromMethod({
            from: "1bWzkMJ6cicQjDA4yi86favKX15tmJy1dkEGBP",
            to: "1E3d1Zs9JBLPPU8oqPvs7fMwXSxmjb81LLU8JA",
			//1bK2FjwY3kUhVj4wxDf1M1pqZgczufmVd1cUKF
            amount: {"asset_chk1":10},
            data: new Buffer("a nice message, for you").toString("hex")
        },(err, res) => {
    console.log('Txn id of Block is  : ' +res)
		})
		
} */
/* {
	"from":"hgj",
	"to":"hgjh",
	"amount":"hgmn:67",
	"data":"gjh"
} */
/* {
"from":"1bWzkMJ6cicQjDA4yi86favKX15tmJy1dkEGBP",
"to":"1bK2FjwY3kUhVj4wxDf1M1pqZgczufmVd1cUKF",
"amount":"asset_chk1:10",
"data":"pli"
} */
/*  function grantAddress()
{
console.log("Calling Grant Method...");
	multichain.grantMethod({
            addresses: "1VL98y8Dgyrd7syQa34wzjtDU8jRkrxDaYuzax",
            permissions: "send"
        })
}  */

/* function issueAssets(data)    
{   
	 multichain.getNewAddressMethod()
    .then(address => {
        assert(address, "Could not get new address")
        address1 = address;
         
        return multichain.validateAddressMethod({address: address1})
    })
    .then(privateKey => {
        assert(privateKey)
        return multichain.grantMethod({
            addresses: address1,
            permissions: "send,receive,issue,admin"
        })
    })
	.then(revokeTxid => {
        assert(revokeTxid);  
		console.log("Issue Asset Started")
        return multichain.issueMethod(
		issuedata = {
			address: address1, 
            asset: { name: "test1",open: true },
            qty: 1000, 
            units: 0.1
        }, (err, res) => {
    console.log('Txn id of Block is  : ' +res)
	})
    })
} */
getInfo()
/* createAssets() */
/* getNewVarifiedaddress() */
/* issueAssets () */
 //listAssets()
/* grantAddress() */ 
//sendAssets () 
/* sendAssetswithdata() */
getTotalBalance() 
/* listWalletTransactions() */
