/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let siteExt = ["com", "net", "us", "io"];

window.onload = function() {
  //write your code here
  let localPromoun = "";
  let localAdj = "";
  let localNoun = "";
  let localSiteExt = "";
  let messageToSay = "";

  for (let iPronoun = 0; iPronoun < pronoun.length; iPronoun++) {
    localPromoun = pronoun[iPronoun];

    for (let iAdj = 0; iAdj < adj.length; iAdj++) {
      localAdj = adj[iAdj];

      for (let iNoun = 0; iNoun < noun.length; iNoun++) {
        localNoun = noun[iNoun];

        for (let iSiteExt = 0; iSiteExt < siteExt.length; iSiteExt++) {
          localSiteExt = siteExt[iSiteExt];
          messageToSay = `${localPromoun}${localAdj}${localNoun}.${localSiteExt}`;
          console.log(messageToSay);
        }
      }
    }
  }
};
