const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect("mongodb://localhost:27017/perfume_store_DB")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
