import express from "express";
import OpenAIChat from "../OpenAIChat.js";

const router = express.Router();
const openAiChat = new OpenAIChat();

router.post('/ask-to-open-ai', async (req, res) => {
    try {
        const { question } = req.body;
        const answer = await openAiChat.askToOpenAi(question);
        res.status(200).json({ answer });
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
});

export default router;
