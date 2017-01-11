-------------------------
Tutorial 1: Intro To Geth
-------------------------

Watch video at : https://www.youtube.com/watch?v=yj4yW_rnNx4

Welcome to this introduction to Geth. In this video, we will learn about Geth, which is the most popular client for the Ethereum blockchain app platform. We will also learn how to download, install and configure Geth. Finally, we will learn to create an Ethereum account using Geth.

Let伍西s start with a quick overview of Geth. Geth is the C L I or command line interface for running a full Ethereum node. 

It is implemented in the Go programming language, but does not require its users to have proficiency in Go. 

It is free to download and install. Geth supports most major operating systems. In this video, we will focus on the Windows version of Geth. 

Now let伍西s look at what Geth can do. Geth can be overwhelming due to its long list of commands, but for now we will focus on three key use cases. First, Geth is used to mine, in other words, to create blocks that are published to the Ethereum blockchain. 
The miner receives Ethereum currency or "Ether" as a reward for doing so.

Secondly, Geth is used to create and manage Ethereum accounts. Accounts can store Ether. Geth also lets you transfer Ether between accounts . This transfer of Ether between accounts is known as a transaction.

Lastly , Geth is used to create contracts. Contracts can receive transfers just like regular accounts. However, they can also receive more complicated transactions that run code, and optionally, update the state of the contract. 

In this series of videos, we will build a simple contract using Geth. Note that we will not be mining any real Ether currency in this video. 

We伍西ll need to do a couple of things before we can dive into Geth. 

First, download and install Geth by going to the download page on the Ethereum site. Choose the Windows 64-bit installer for version 1.5.6, which should work on most modern Windows systems. Run the installer like you would any other installer.

Next, we伍西ve created some helper scripts to make learning Geth easy. 
Head over to the github URL that you see here. 
Click the green "clone or download" button, and select "Download zip".
Unzip the zip file that is downloaded. You should see a folder called "nugget1". We will use that folder for our first lab with Geth.

Ok, let伍西s dive into our lab. 
As a prerequisite, you伍西ll need to be comfortable using the Windows command line. 
Some exposure to programming languages is helpful but not required.

Now, start the Windows command line. 

Head into the nugget1 folder.

For the purposes of this exercise, we伍西ll create a private blockchain. Initialize this blockchain with the "genesis block" or first block. Use the helper script genesis to do so.

Now that the blockchain has been initialized, let伍西s create our first account. We will use the Javascript console that comes with Geth. 
Start this console using the helper script "console".

Once the console is up and running, type "personal.new Account" to create your first account. 

Provide a password that you can remember. You will be asked to enter it twice.

Geth responds with a long hex string that represents your account address.

Congratulations! You have created your first Ethereum account on your own private Ethereum network!

So let伍西s recap what we learned today. We learned about the key features of Geth, how to download and install it, how to start a new blockchain, and how to create an account.
