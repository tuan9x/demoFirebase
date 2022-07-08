const express = require("express");
var cors = require("cors");
var faker = require("faker");

const app = express();
app.use(cors());

var admin = require("firebase-admin");
var serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://xxxx-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const db = admin.database();

app.get("/", function (req, res) {
  const userId = req.query.id;

  if (!userId) return res.json({ error: "Invalid user" });
  return admin
    .auth()
    .createCustomToken(userId)
    .then(function (token) {
      res.json({ token: token });
    })
    .catch(function (error) {
      res.status(500).json({ error: String(error) });
    });
});

app.get("/ping", async function (req, res) {
  const userId = req.query.id;
  const mess = req.query.mess || faker.name.findName();

  if (!userId) return res.json({ error: "Invalid user" });

  const newContact = {
    mess: mess,
    uid: userId,
  };
  await db.ref(`message/${userId}`).push(newContact);
  res.send("ok");
});

app.listen(5000, () => console.log(">>>>>> Server running at port 5000"));
