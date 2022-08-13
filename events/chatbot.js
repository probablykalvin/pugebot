const owner = `$username[$botOwnerID]`
const name = `$username[$clientID]`

module.exports = {
  name: "$alwaysExecute",
  code: `
$if[$channelID==$getServerVar[chatbot]]
$reply[$messageID;$get[reply];yes]
$let[reply;$jsonRequest[$replaceText[https://api.popcat.xyz/chatbot?msg=$message&owner=${owner}&botname=${name}; ;+];response;Error]]
$botTyping[7s]
$let[message;$message]
$endIf
$onlyIf[$getServerVar[chatbot]!=]
`
}