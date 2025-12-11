const express = require("express");
const app = express();
const { MongoClient, ObjectId } = require("mongodb");

app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "myDB";

// connect to MongoDB
async function main() {
    await client.connect();
    console.log("MongoDB Connected!");
}
main(); // connect

// database & collection
const db = client.db(dbName);
const usersCollection = db.collection("users");

// root route
app.get("/", (req, res) => {
    res.send("server running successfully!");
});

// ADD new user
app.post("/users", async (req, res) => {
    try {
        const newUser = req.body; 

        const result = await usersCollection.insertOne(newUser);

        res.json({
            message: "User added successfully!",
            insertedId: result.insertedId
        });
    } catch (err) {
        res.status(500).send("Error inserting user");
    }
});

// GET user by ID
app.get("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const user = await usersCollection.findOne({ _id: new ObjectId(id) });

        if (!user) {
            return res.status(404).send("User not found");
        }

        res.json(user);
    } catch (err) {
        res.status(400).send("Invalid ID format");
    }
});

// UPDATE user by ID
app.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;

        const result = await usersCollection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updatedData }
        );

        if (result.matchedCount === 0) {
            return res.status(404).send("User not found");
        }

        res.send("User updated successfully!");
    } catch (err) {
        res.status(400).send("Invalid ID format");
    }
});

// start server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});

