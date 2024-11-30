const mongoose = require("mongoose");
// URL kết nối MongoDB
//const local = "mongodb+srv://admin1:nJkeQUgpNAOm5kBg@cluster0.7mgrb.mongodb.net/MD19303";
const mongoURI = "mongodb://127.0.0.1:27017/MyDatabase";
//kết nối
const connect = async () => {
  try {
    await mongoose
      .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("kết nối mongodb thành công");
      })
      .catch((err) => {
        console.log("kết nối thất bại");
      });
  } catch (error) {
    console.log("kết nối thất bại" + error);
  }
};
module.exports = { connect };