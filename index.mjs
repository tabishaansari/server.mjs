import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
