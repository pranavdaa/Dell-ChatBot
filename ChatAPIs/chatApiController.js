
const ChatAPIController = {};

const messageBox = {
    "messages" : [
    {
        "input" : "Hello",
        "res" : "Hey, You look nice"
    },
    {
        "input" : "1234",
        "res" : "The product is in transit with DHL, you will redceive a message soon"
    },
    {
        "input" : "54677",
        "res" : "The product is delivered on given address"
    },
    {

    },
    ]
}
ChatAPIController.status =((req, res) =>{
    const { body } = req
    const { message } = body

    const fs = require('fs');

    // let rawdata = fs.readFileSync('');
    // let messageBox = JSON.parse(rawdata);
    for( x = 0 ; x < messageBox.messages.length; x ++ ){
        let messageObject = messageBox.messages[x]
        if(messageObject.input == message){
            res.status(200).json(messageObject.res)
            return
        }else{
            
        }

    }
    res.status(400).json("Sorry, Cannot answer this one");

});
module.exports = ChatAPIController
