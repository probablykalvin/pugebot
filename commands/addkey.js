
module.exports = ({
name: "add-key",
code: `$description[Successfully added an API key with the name \`$message\`]
$color[GREEN]
$djsEval[const keysList = require('/home/runner/gud-api/assets/keys.json')
keysList.push("$message")]
$onlyForIDs[$botOwnerID;]`
})