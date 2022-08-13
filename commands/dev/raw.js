module.exports = {
name: "raw",
dec: "Evaluate aoi.js code in raw form.",
cat: "Devs",
perm: "developers, managebot",
use: "raw {code}",
code: `
$if[$message[1]==aoi]
$eval[$messageSlice[1]]
$elseIf[$message[1]==djs]
$djsEval[$messageSlice[1];yes]
$endElseIf
$endIf
$onlyIf[$message!=;{description:$replaceText[$getVar[no];&use;$commandInfo[$commandName;use]]}{color:RED}]
$onlyForIDs[$botOwnerID;754933826085715968;\]`
}