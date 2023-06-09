const fetch = require("node-fetch");
let chatbot_name;
let chatbot_gender;
class Chatbot{
    /**
     * 
     * @param {object} ops The Options for tha chatbot
     * @param {string} ops.name The name of the chatbot 
     * @param {string} ops.gender The gender of the chatbot
     * @example
     * const chat = require("discord-chatbot");
     * const Chatbot = new chat.Chatbot({name:'my bot', gender:'male'});
     * Chatbot.chat("Hello").then(console.log)
     * /**
     * Hi, my friend! Do you want me to tell you a joke?
     * * /
     */
    constructor(ops = {name: 'chatbot', gender:'male'}){
        chatbot_name = ops.name;
        chatbot_gender = ops.gender;
    }

    /**
     * 
     * @param {string} message The message for the chatbot
     * @returns {string} Message processed by the chatbot 
     */
    async chat(message){
        if(!message) throw new Error("Error. No message provided")
        const res = await fetch(`https://api.udit.tk/api/chatbot?message=${encodeURIComponent(message)}&gender=${encodeURIComponent(chatbot_gender)}&name=${encodeURIComponent(chatbot_name)}`).catch(e => {
            throw new Error(`Ran into an Error. ${e}`);
        });
        const response = await res.json().catch(e =>{
            throw new Error(`Ran into an Error. ${e}`);
        });
        return response.message.replace('CleverChat', chatbot_name).replace('male', chatbot_gender);
    }
}
module.exports = Chatbot;