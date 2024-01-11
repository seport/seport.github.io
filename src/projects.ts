import chompImg from "@/public/crocodentist.gif";
import chompDemo from "@/public/crocodentist-demo.gif";
import faceworkBanner from "@/public/faceworkbanner.jpeg";

export default {
  chomp: `
# Chomp.moe

Chomp.moe is an interactive twitch game for an unlimited number of players! It is based on the real life party game [Crocodile Dentist](https://en.wikipedia.org/wiki/Crocodile_Dentist) and heavily inspired by Jackbox.

![chomp landing page](${chompImg})

One streamer hosts the game, allowing viewers to join on their phone. Each round, every player picks a tooth. Then, the game host does alligator dentistry live on their stream, until the alligator chomps! All players that picked the bad tooth are eliminated, while the others stay in for the next round.

![chomp demo](${chompDemo})

This web-based game was coded using the next.js framework and the socket.io library to drive real time events to the stream and the player's phones. It utilizes passport for twitch authentication to link the players in the game to their twitch profiles. It is one of my first personal projects to heavily rely on sockets and I got to learn a ton about real time event handling.

Music and sound design was provided by the all-talented [Joshua Hou](https://joshuahou.com/).

`,
  facework: `
# FaceWork

[Facework.app](https://kcimc.medium.com/working-with-faces-e63a86391a93) is an [open source](https://github.com/kylemcdonald/facework/tree/dev/frontend) digital art installation by [Kyle McDonald](http://kylemcdonald.net/). I had the pleasure of working on it as a frontend developer alongside [Evelyn Masso](https://outofambit.format.com/) in Winter 2020.

![facework](${faceworkBanner})
`
};
