const localStorage = require('./localstorage');
const jwt = require("jsonwebtoken");
const jwtSecret = require("../config/jwtkey");

const verifyToken = (req, res, next) => {
  const savedToken = localStorage.getItem("auth-token");
   //console.log(savedToken)
  if (savedToken) {
    jwt.verify(savedToken, jwtSecret.jwtKey, (err, authData) => {
      if (err) {
        res.status(403).json({ message: "You are authorized to access this route" });
      } else {
        req.authData = authData;
        if(req.authData.id == '5da0504b765e7f2b68bc0806')
       {
        next();
       } else {
           res.status(404).json({message:'you are not logged in as admin!!'})
       }
      }
    });
  } else {
    res.status(404).json({ message: "Token not Found, please login" });
  }
};

module.exports = verifyToken;
