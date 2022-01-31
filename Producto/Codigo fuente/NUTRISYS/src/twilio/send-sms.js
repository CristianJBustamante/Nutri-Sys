import config from "../config";

const client = require('twilio')(config.accountSid, config.authToken)

async function sendMessage(body, phone) {
    try {
        const message = await client.messages.create({
            to: phone,
            from: '+16066033106',
            body: body
        })
        return message
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {sendMessage};