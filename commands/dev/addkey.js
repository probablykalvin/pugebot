module.exports = ({
name: "addkey",
aliases: ["apikey"],
dec: "Add an api key to our database.",
cat: "Devs",
use: "addkey {api key}",
perm: "developers, managebot, api",
code: `$description[Successfully added an API key with the name \`$message\`]
$color[BLUE]
$djsEval[const keysList = require('/home/runner/Puge-Development/assets/keys.json')
keysList.push("$message")]
$onlyIf[$message!=;{description:$replaceText[$getVar[no];&use;$commandInfo[$commandName;use]]}{color:RED}]
$onlyForIDs[$botOwnerID;\]`
})