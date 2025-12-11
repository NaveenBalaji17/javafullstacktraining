//mongoosedemo.js
const mongoose = require("mongoose");

// 1. Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/myDB")
   .then(() => console.log("MongoDB connected!"))
   .catch(err => console.log(err));

// 2. Create Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// 3. Create Model (VERY IMPORTANT)
const Student = mongoose.model("Student", studentSchema);

// 4. Insert Document
async function createStudent() {
    const s = new Student({
        name: "Naveen",
        age: 20,
        course: "Java Full Stack"
    });

    const result = await s.save();
    console.log("Inserted:", result);
}

createStudent();
