/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let webs = [];
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var dot = [".com", ".es", ".net"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let itwo = 0; itwo < adj.length; itwo++) {
      for (let ithree = 0; ithree < noun.length; ithree++) {
        for (let ifour = 0; ifour < dot.length; ifour++) {
          let hola = pronoun[i] + adj[itwo] + noun[ithree] + dot[ifour];
          webs.push(hola);
        }
      }
    }
  }

  let websparahtml = document.querySelector("#aqui");

  for (let item = 0; item < webs.length; item++) {
    websparahtml.innerHTML += "<li>" + webs[item] + "</li>";
  }

  console.log(webs);
};
