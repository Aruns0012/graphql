const mongoose = require("mongoose");
const express = require("express");


const Hostels = new mongoose.Schema({
    city: {
        type: String,
    },
    img: {
        type: String,
    }
})

const hostels = new mongoose.model("hostels", Hostels);
module.exports = hostels;