// const mongoose = require("mongoose");
// // const mySecret = process.env['MONGO_URI']
// const connectDB = () => {
//     mongoose
//         .connect(`mongodb+srv://seseiitism:6MikC0k6s89vEZtw@cluster0.d3c1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
//         .then((d) => {
//             console.log(`Database connected at ${d.connection.host}`);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");

// const connectDB = () => {
//     mongoose
//         .connect(`mongodb+srv://seseiitism:6MikC0k6s89vEZtw@cluster0.d3c1d.mongodb.net/sese?retryWrites=true&w=majority&appName=Cluster0`, {
           
//             serverSelectionTimeoutMS: 5000 // Optional: increase timeout for server selection
//         })
//         .then((d) => {
//             console.log(`Database connected at ${d.connection.host}`);
//         })
//         .catch((error) => {
//             console.log('Error:', error.message);
//         });
// };

// module.exports = connectDB;
const mongoose = require("mongoose");
const mySecret = process.env['MONGO_URI']
const connectDB = () => {
    mongoose
        .connect(mySecret, {
            
            serverSelectionTimeoutMS: 1000// Increase timeout to 10 seconds
        })
        .then((d) => {
            console.log(`Database connected at ${d.connection.host}`);
        })
        .catch((error) => {
            console.log('Error:', error.message);
        });
};

module.exports = connectDB;


// const mongoose = require('mongoose');
// const mySecret = process.env['MONGO_URI']
// const connectDB = async () => {
//   try {
//     await mongoose.connect(mySecret, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     })
//     console.log("db connected")
    
//   }
//   catch (error) {
//     console.error(error);
//   }
// }

// module.exports = connectDB;