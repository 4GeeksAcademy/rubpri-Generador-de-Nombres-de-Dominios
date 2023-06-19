/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function nameGenerator(pronoun, adj, noun, dot) {
    let finalListOfDomains = [];

    for (let i = 0; i < pronoun.length; i++) {
      for (let j = 0; j < adj.length; j++) {
        for (let k = 0; k < noun.length; k++) {
          for (let h = 0; h < dot.length; h++) {
            let domain = pronoun[i] + adj[j] + noun[k] + dot[h];
            finalListOfDomains.push(domain);
          }
        }
      }
    }

    return finalListOfDomains;
  }

  const a = ["the", "our"];
  const b = ["great", "big"];
  const c = ["jogger", "racoon"];
  const d = [".com", ".es", ".net"];

  const nameGeneratorWeb = nameGenerator(a, b, c, d);

  let nameGeneratorWebhtml = document.querySelector("#aqui");

  for (let item = 0; item < nameGeneratorWeb.length; item++) {
    nameGeneratorWebhtml.innerHTML += "<li>" + nameGeneratorWeb[item] + "</li>";
  }
};
