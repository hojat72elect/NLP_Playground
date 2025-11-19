import winkNLP from 'wink-nlp';
import model from 'wink-eng-lite-web-model';

const nlp = winkNLP(model);

const text = "Hello   World🌎! How are you?\nNames are for friends, so I do not need one. 😏";
const doc = nlp.readDoc(text); // Reading a text

console.log(doc.out(), "\n"); // Logging the contents of the document

console.log(doc.tokens().out(nlp.its.type, nlp.as.freqTable)); // token types and their frequencies

console.log(doc.sentences().out()); // Breaks the whole text into separate sentences.

console.log(doc.entities().out(nlp.its.detail)); // ?

console.log(doc.tokens().out()); // Break the text into tokens.