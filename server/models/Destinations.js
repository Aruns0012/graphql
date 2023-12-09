const mongoose = require("mongoose");
const express = require("express");


const Destinations = new mongoose.Schema({
    city: {
        type: String,
    }
})

const destination = new mongoose.model("destinations", Destinations);
module.exports = destination;