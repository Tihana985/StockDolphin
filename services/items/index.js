const express = require("express");
const items = require("./handlers/itemsHandler");
const database = require("../../pkg/db/index");
const cors = require("cors");
const expressJWT = require("express-jwt");
const jwt = require("jsonwebtoken");

const app = express();

database.init();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(expressJWT.expressjwt({
  algorithms: ["HS256"],
  secret: process.env.JWT_SECRET,
  getToken: (req) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
      return req.headers.authorization.split(" ")[1];
    }
    if (req.cookies.jwt) {
      return req.cookies.jwt;
    }
    return null;
  },
})
.unless({
  path: [],
})
);

function verifyToken(req, res, next) {
const token = req.headers["authorization"].split(" ")[1];
if (!token) {
return res.status(401).json({ message: "No token provided." });
}

console.log(token);
jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
if (err) {
  return res.status(403).json({ message: "Failed to authenticate token." });
}

req.user = decoded;
next();
});
};

function restrictToAdmin(req, res, next) {
console.log(req.user);

if (!req.user || req.user.role !== "admin") {
return res.status(403).json({ message: "Permission denied." });
}
next();
};

// Routes accessible to all users
app.get("/inventory/:categoryName", items.getAllItems);
app.get("/inventory/:categoryName/:id", items.getOneItem);

// Routes accessible only to admin users
app.post("/inventory/:categoryName", verifyToken, restrictToAdmin, items.uploadItemImage, items.createItem);
app.patch(
  "/inventory/:categoryName/:id", verifyToken, restrictToAdmin, items.uploadItemImage, items.updateItem);
app.delete("/inventory/:categoryName/:id", verifyToken, restrictToAdmin, items.deleteItem);

app.listen(process.env.PORT_ITEMS, (err) => {
  if (err) {
    console.log("Could not start service");
  }
  console.log(`Service started successfully on port ${process.env.PORT_ITEMS}`);
});