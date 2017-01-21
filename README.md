-------------------------
Tutorial 1: Intro To Geth
-------------------------

Watch video at : https://www.youtube.com/watch?v=yj4yW_rnNx4

Welcome to this introduction to Geth. In this video, we will learn about Geth, which is the most popular client for the Ethereum blockchain app platform. We will also learn how to download, install and configure Geth. Finally, we will learn to create an Ethereum account using Geth.

Let's start with a quick overview of Geth. Geth is the C L I or command line interface for running a full Ethereum node. 

It is implemented in the Go programming language, but does not require its users to have proficiency in Go. 

It is free to download and install. Geth supports most major operating systems. In this video, we will focus on the Windows version of Geth. 

Now let's look at what Geth can do. Geth can be overwhelming due to its long list of commands, but for now we will focus on three key use cases. First, Geth is used to mine, in other words, to create blocks that are published to the Ethereum blockchain. 
The miner receives Ethereum currency or "Ether" as a reward for doing so.

Secondly, Geth is used to create and manage Ethereum accounts. Accounts can store Ether. Geth also lets you transfer Ether between accounts . This transfer of Ether between accounts is known as a transaction.

Lastly , Geth is used to create contracts. Contracts can receive transfers just like regular accounts. However, they can also receive more complicated transactions that run code, and optionally, update the state of the contract. 

In this series of videos, we will build a simple contract using Geth. Note that we will not be mining any real Ether currency in this video. 

We will need to do a couple of things before we can dive into Geth. 

First, download and install Geth by going to the download page on the Ethereum site. Choose the Windows 64-bit installer for version 1.5.6, which should work on most modern Windows systems. Run the installer like you would any other installer.

Next, we've created some helper scripts to make learning Geth easy. 
Head over to the github URL that you see here. 
Click the green "clone or download" button, and select "Download zip".
Unzip the zip file that is downloaded. You should see a folder called "nugget1". We will use that folder for our first lab with Geth.

Ok, let's dive into our lab. 
As a prerequisite, you'll need to be comfortable using the Windows command line. 
Some exposure to programming languages is helpful but not required.

Now, start the Windows command line. 

Head into the nugget1 folder.

For the purposes of this exercise, we'll create a private blockchain. Initialize this blockchain with the "genesis block" or first block. Use the helper script genesis to do so.

Now that the blockchain has been initialized, let's create our first account. We will use the Javascript console that comes with Geth. 
Start this console using the helper script "console".

Once the console is up and running, type "personal.new Account" to create your first account. 

Provide a password that you can remember. You will be asked to enter it twice.

Geth responds with a long hex string that represents your account address.

Congratulations! You have created your first Ethereum account on your own private Ethereum network!

So let's recap what we learned today. We learned about the key features of Geth, how to download and install it, how to start a new blockchain, and how to create an account.

-------------------------
Tutorial 2: Mining Ether
-------------------------

Watch video at : https://www.youtube.com/watch?v=289EzMOHYnQ


Welcome to the second video in Ethereum Fundamentals. Today's topic is: Introduction To Mining Ether.

Let's recap what we learned in the previous video.
We looked at Geth, the command line interface for Ethereum.

We learned how to install the latest version of Geth for Windows.

In the lab session, we saw how to set up Geth, and create a private blockchain.

Lastly, we created out first Ethereum account. 

So let's look at our goals for today.

We will start with an overview of ether. 

Next, we will learn about mining ether, which is one of the most crucial concepts in blockchain technology and crypto currencies.

Finally, we will continue our lab, where we will learn how to create ether.


Ok, let's dive into today's topic. What is ether, what is mining, and how are the two related?

What is ether?
Simply put, ether is the “Fuel for operating Ethereum”. As we saw in the previous video, computers that run Ethereum are called nodes. These nodes need a way to be paid for "renting out" their resources, namely, computational power, storage and networking, in order to keep Ethereum up and running. 
But this needs to happen without the exchange of traditional currency, given that Ethereum does not rely on a third party, like a state-backed central bank.

To solve this problem, ether is used to compensate these nodes. Think of it as a token of value that is accepted by all nodes on the Ethereum network.

Now, assuming that you have some ether, what can you do with it? 
If you are a developer, who is creating applications on Ethereum, you need "space" on the Ethereum blockchain to store and run your applications. 

This means, you need a way to "rent space" on the blockchain. Ether is used to compensate nodes, to provide space in the blockchain for you. We will explore this mechanism, also known as "Gas", in detail later.

Lastly, Ethereum can be traded for other currencies, including crypto currencies such as Bitcoin, or traditional currencies such as the US Dollar. Several exchanges are available online, that let you do so.


So, how is new ether created? 
Ethereum relies on the growth of its blockchain. Unless new blocks containing transactions are added to the blockchain, Ethereum becomes useless. 
How are these blocks created? These blocks are not created by a single node. They are created using a competition.

Ethereum nodes compete with each other to create the next block that will be added to the blockchain. 

They perform complex calculations, known as hashing algorithms, that require a large amount of time and effort to generate the "right answer". 

The winning node, the one who comes up with the "right answer", is rewarded with new ether, that is credited to their account.


Therefore, this process that results in the "Creation of Ether" is called "Mining”.


Ok, so far, we learned about ether, and the process that creates it, mining.

Now, let's create some ether in our private blockchain! Ensure that you have watched our previous video, so that you can follow along.

Please note: The concepts that you learn here, can easily be used to create real ether. However, creating or mining real ether will not be covered here.