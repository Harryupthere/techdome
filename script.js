// Initialize Web3.js
// import Web3 from 'web3';



//  const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com/"));


// const contractABI = [
//     {
//         "inputs": [
//             {
//                 "internalType": "string",
//                 "name": "newMessage",
//                 "type": "string"
//             }
//         ],
//         "name": "setMessage",
//         "outputs": [],
//         "stateMutability": "nonpayable",
//         "type": "function"
//     },
//     {
//         "inputs": [],
//         "name": "getMessage",
//         "outputs": [
//             {
//                 "internalType": "string",
//                 "name": "",
//                 "type": "string"
//             }
//         ],
//         "stateMutability": "view",
//         "type": "function"
//     }
// ]

//  const contractAddress = '0x4AB3e15E86dB8d434183B5517Be2f9879B71BD2e';

//  const contract = new web3.eth.Contract(contractABI, contractAddress);


//  const accountAddress = '0xc8Ff119e99CCb1e4aB41B536971a1fC5026BD282';
//  const privateKey = '2f7084810a3b1e24c96c9bfcbbafea2e35219cdc73dc6f3e124acd0418aecd95';

document.getElementById("transactionButton").addEventListener("click",async  function () {
    const message = document.getElementById("messageInput").value;
    console.log(message);
    // const data = contract.methods.setMessage(message).encodeABI();

    // const txObject = {
    //     from: accountAddress,
    //     to: contractAddress,
    //     gas: 200000, 
    //     data: data,
    // };

    // web3.eth.accounts.signTransaction(txObject, privateKey)
    // .then(signedTx => {
    //     web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    //         .on('transactionHash', function (hash) {
    //             console.log('Transaction Hash:', hash);
    //         })
    //         .on('confirmation', function (confirmationNumber, receipt) {
    //             if (confirmationNumber > 0) {
    //                 alert("Transaction Confirmed")
    //             }
    //         })
    //         .on('error', function (error) {
    //             console.error('Transaction Error:', error);
    //         });
    // });
});

document.getElementById("showMessageButton").addEventListener("click",async function () {
    // const message = await contract.methods.getMessage().call();
    // const messageDisplay = document.getElementById("messageDisplay");
    //     messageDisplay.textContent = message;
});
