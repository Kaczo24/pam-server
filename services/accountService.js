var express = require('express');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {find, save} = require("../models/accountModel");

exports.login = async (req, res, next) => {
    let result = find({username: req.body.username});
    if(result.length !== 1) 
        return res.status(401).json({"error": "Wrong username!"})
    bcrypt.compare(req.body.password, result[0].password, (err, status) => {
        if(status) {
            jwt.sign({
                user: result[0]
            }, process.env.TOKEN_SECRET, {expiresIn: "7d"}, (err, token) => {
                res.status(200).json({"success": token})
            })

        } else {
            res.status(401).json({"error": "Wrong password!"})
        }
    })
}

exports.register = async (req, res, next) => {
    let result = find({username: req.body.username});
     if(result.length > 0) 
         return res.status(409).json({"error": "This user already exists!"})
     else {
         bcrypt.hash(req.body.password, 10).then(hashed => {
             const user = {
                 username: req.body.username,
                 password: hashed
             };
             save(user)
             return res.status(200).json({"success": "Registered."})
         })
     }
     
}