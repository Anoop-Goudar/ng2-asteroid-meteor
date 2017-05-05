import { createClass } from "asteroid";

const Asteroid = createClass();
// Connect to a Meteor backend
const asteroid = new Asteroid({
  endpoint: "ws://localhost:3000/websocket"
});

// Use real-time collections
asteroid.subscribe("todoList");

// asteroid.ddp.on("added", ({collection, id, fields}) => {
//   console.log(`Element added to collection ${collection}`);
//   console.log(id);
//   console.log(fields);
// });

// asteroid.ddp.on('ready', (doc) => {
//   if (doc.collection === 'todo') {
//     console.log('doc is ready....');
//     console.log(doc);
//   }
// });
//
// asteroid.ddp.on('added', (addedDoc) => {
//   if (addedDoc.collection === 'todo') {
//     console.log('addedDoc');
//     console.log(addedDoc);
//   }
// });
//
// asteroid.ddp.on('removed', (removedDoc) => {
//   if (removedDoc.collection === 'todo') {
//     console.log('removedDoc');
//     console.log(removedDoc);
//   }
// });
//
// asteroid.ddp.on('changed', (updatedDoc) => {
//   if (updatedDoc.collection === 'todo') {
//     console.log('updatedDoc');
//     console.log(updatedDoc);
//   }
// });

// Login
// asteroid.loginWithPassword({
//   username,
//   email,
//   password
// });

// Call method and use promises
// asteroid.call("newUser")
//   .then(result => {
//     console.log("Success");
//     console.log(result);
//   })
//   .catch(error => {
//     console.log("Error");
//     console.error(error);
//   });

export default asteroid;
