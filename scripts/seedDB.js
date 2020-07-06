const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://user:password1@ds027761.mlab.com:27761/heroku_6kd0j3x6"
);
const bookSeed = [
  {
		title: "Jurassic Park: The Deluxe Novelization (Jurassic Park)",
    author: [
			"Gail Herman"
			],
    description:
		"Dinosaurs walk the earth once again in this story of adventure and danger.",
		image: "http://books.google.com/books/content?id=uKZJDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE73FBLxI92131qEjKorGfzO96T3o6pHOpIW6YQsdHPy-zftyIP6PDrpsls8Ejslo-VsdIE7P0uqnhO3ZkgBQiX6tc9AVz2ysLiVfWt1uVeFvH_RwRAivyvBoHyq2zEPNm3uORkzE&source=gbs_api",
		link: "https://play.google.com/store/books/details?id=uKZJDwAAQBAJ"
  },
];
db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });