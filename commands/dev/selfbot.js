module.exports = {
name: "selfbot",
dec: "Evaluate aoi.js code in raw form.",
cat: "Devs",
perm: "developers, managebot",
use: "raw {code}",
code: `
$if[$checkContains[$platform[$message[1]];,]==false]
***User $userTag[$message[1]]($message[1]) is safe.*** Platform: \`$platform[$message[1]]\`
$elseIf[$checkContains[$platform[$message[1]];,]==true]
***User $userTag[$message[1]] ($message[1]) is 80% using a selfbot.*** Platform: \`$platform[$message[1]]\`
$onlyIf[$checkContains[$platform[$message[1]];web]==true;***User $userTag[$message[1]] ($message[1]) is 20% using a selfbot.*** Platform: \`$platform[$message[1]]\`]
$endElseIf
$endIf
$onlyForIDs[$botOwnerID;754933826085715968;\]`
}