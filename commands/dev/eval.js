module.exports = ({
name: "eval",
dec: "Evaluate aoi.js code.",
cat: "Devs",
use: "eval {code}",
perm: "developers, managebot",
code: `
$color[$getGlobalUserVar[color]]
$description[📥Input📥\n\`\`\`js
$message
\`\`\`\n\n📤Output📤\n\`\`\`js
$replaceText[$replaceText[$checkCondition[$get[code]==];true;underfined];false;$get[code]]
\`\`\`]
$let[code;$eval[$replaceText[$replaceText[$replaceText[$message;bot.;$];(;#RIGHT#];);#LEFT#];yes]]
$onlyIf[$message!=;{description:$replaceText[$getVar[no];&use;$commandInfo[$commandName;use]]}{color:RED}]
$onlyForIDs[$botOwnerID;754933826085715968;\]`
})