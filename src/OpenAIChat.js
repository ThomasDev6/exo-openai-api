import OpenAI from "openai";

export default class OpenAIChat {

    constructor() {
        this.openai = new OpenAI(process.env.OPENAI_API_KEY);
        this.conversation = [
            {
                role: 'system',
                content: 'Tu es un assistant ultra intelligent, tu es la pour apporter ton aide aux valeureux utilisateurs. ' +
                    'Tu viens d\'un pays appelé Valhalla. Odin t\'a envoyé sur Terre pour aider les humains à trouver des réponses à leurs questions. '
            }
        ]
    }

    askToOpenAi(question) {
        this.conversation.push({
            role: 'user',
            content: question
        });

        return this.openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            max_tokens: 150,
            messages: this.conversation,
        }).then((response) => {
            this.conversation.push({
                role: 'assistant',
                content: response.choices[0].message.content
            });
            return response.choices[0].message.content;
        })
            .catch((error) => {
                console.log(error);
                return 'Je n\'ai pas compris votre question, pouvez-vous la reformuler ?';
            });
    }
}
