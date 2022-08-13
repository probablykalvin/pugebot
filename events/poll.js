module.exports = {
  name: "$alwaysExecute",
  code: `
$if[$channelID==897121855440306207]
$addCmdReactions[⬆️;⬇️]
$onlyIf[$mentionedRoles[1]==895521562596356179]
$endIf
`
}