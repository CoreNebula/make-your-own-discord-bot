<h1 align='center'>Make Your Own Discord Bot</h1>
<p align='center'><i>"A template for a discord bot using discord.js".</i></p>

<p align='center'>Do you want to make your own personalized Discord bot, but dont know how or where to start?<br>
If so, I've got you covered. Through this tutorial you will be learn how to setup and customize your own discord bot.</p> 

<p align='center'><b>If you end up liking this tutorial and/or the template bot that I made, please consider donating on my <a href='https://patreon.com/corenebula'>Patreon</a></b></p>



## Prerequisites (What You Need)

- [X] A Discord Account
- [X] An Internet Connection
- [X] A Computer Running Windows or MacOS

While knowledge of coding is not required, some very basic knowledge of javascript will be helfull if you want really use the full potential of your bot.

The Discord account and internet are kind of givens, but in order to run your bot you will need a computer. Windows and MacOS will both work, but as far as linux distributions go I am not sure. As long as you can install and use Node.js you should be fine.

## Making a Discord Application
![Discord Developer Portal](https://github.com/CoreNebula/make-your-own-discord-bot/blob/master/tutorial-images/IMG_0726.JPG?raw=true)

First, we need to head over to the [Discord Developer Portal](https://discordapp.com/developers/applications) and under applications, create a new application. Creating this application is what allows us to connect the bot to Discord servers. You can give your application a name, which I would recommend being the same name you want to use for your bot.

![App Name](https://github.com/CoreNebula/make-your-own-discord-bot/blob/master/tutorial-images/IMG_0728.JPG?raw=true)

## Adding a Bot User
![Add a Bot](https://github.com/CoreNebula/make-your-own-discord-bot/blob/master/tutorial-images/IMG_0729.JPG?raw=true)

In the left menu select the Bot tab and then click on add a bot user. The bot user is the actual bot that you will interact with in Discord. You can now give your bot a name. This is the name that will be displayed in Dicord.

If you want you can add your own profile image for the bot, but it is not required.

## Getting Yor Bot's Token
![Bot Token](https://github.com/CoreNebula/make-your-own-discord-bot/blob/master/tutorial-images/IMG_0727.JPG?raw=true)

In the bot tab, there is now a bot token underneath the bot name. You can click to reveal the token and copy it, or just click on "Copy". We will need this token later so you don't need to copy it now, but keep the tab open so you can copy it when we need it.

## Intstalling Node
![Node](https://github.com/CoreNebula/make-your-own-discord-bot/blob/master/tutorial-images/IMG_0730.JPG?raw=true)

Now, we need to go to the [Node.js website](https://nodejs.org/en/download/) and download Node.js. On the wbsite select your operating system and download the installer. Once downloaded run the installer and wait for it to finish.

Node.js is an asynchronous, event-driven JavaScript runtime that was made to build scalable network applications. For example a Discord bot.

Basically, Node allows us to easily connect our bot's code to the Discord application we created. It's almost like putting the bot's brain in its body.

## Downloading My Bot Template.
![Github Download](https://github.com/CoreNebula/make-your-own-discord-bot/blob/master/tutorial-images/IMG_0731.JPG?raw=true)

In GitHub (on this site) click on "Clone Or Downlod" and then "Download Zip". While the file is downloading you can create a new folder on your computer, wherever you want your bot to be. This folder will be your project folder. Once the file has finished downloading, unzip and extract the files to your project folder.

