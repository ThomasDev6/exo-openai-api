import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({ apiKey });

const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: "user", content: "Hello, how are you?" }],
});

console.log(completion.choices);
