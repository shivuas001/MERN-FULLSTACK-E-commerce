const PORT = 4000;

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const malter = require("multer");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors);