const express = require('express');
const cors = require('cors');
const calculation = require("./calculation");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: false }));

calculation.randFour()

app.get('/message', (req, res) => {
    res.json({ randFour: calculation.randFour(), randCard: calculation.randCardSuit() });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});

app.post('/create', (req, res) => {
    console.log(req.body);
    Item.insertMany(req.body);
})

mongoose.connect("mongodb://localhost:27017/leaderboardDB", { useNewURLParser: true });
const itemSchema = {
    name: String,
    score: Number
};

const Item = mongoose.model("Item", itemSchema);

const item1 = new Item({
    name: "Anthony",
    score: 5000,
})

const item2 = new Item({
    name: "Adrian",
    score: 3000,
})

const item3 = new Item({
    name: "Jaydin",
    score: -2000,
})
//Item.insertMany(defaultItems);     const defaultItems = [item1, item2, item3];
console.log("hi")
/* async function execute(interaction) {
    const itemFind = await Item.findOne({
        name: interaction.name.id,
        score: interaction.score.id
    })

    console.log(itemFind)
} */


app.get('/home', (req, res) => {
    Item.find().then(foundItems => {
        res.json(foundItems);
    });
    //res.render(itemFind());
})



