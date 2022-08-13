module.exports = [{
  name: "help",
dec: "Get a list of my commands or a specific command informations.",
cat: "General",
use: "help <command>",
perm: "sendmessages, readMessagehistory, embedlinks",
code: `
$addCmdReactions[✅]
$color[$getGlobalUserVar[color]]
$if[$message[1]==]
$author[$userTag[$clientID];$userAvatar[$clientID]]
$thumbnail[$serverIcon]
$description[Hi $username! I'm Puge Development. An ai that developed by Puge Development team to manage their projects. If you have any questions about my commands type \`.help <command>\`. Goodluck!]
$addField[Dev:;\`addkey\`, \`eval\`, \`raw\`;no]
$addField[Miscellaneous:;\`avatar\`]
$addField[General:;\`help\`;no]
$addField[Settings:;\`settings\`;no]
$addField[🔥 NEW: Economy;\`work\`, \`beg\`, \`daily\`, \`deposit\`, \`withdraw\`, \`balance\`, \`profile\`]
$footer[Lastest Update: $client[readytimestamp] ago | Version: $getVar[ver]]
$else
$author[Result for : $message[1];$userAvatar[$clientID]]

$addField[Permissions Needed:;\`$replaceText[$replaceText[$checkcondition[$commandInfo[$message[1];perm]==];true;None];false;$commandInfo[$message[1];perm]]\`;no]
$addField[Usage:;\`$replaceText[$replaceText[$checkcondition[$commandInfo[$message[1];use]==];true;None];false;$commandInfo[$message[1];use]]\`;no]
$addField[Aliases:;\`$replaceText[$replaceText[$checkcondition[$commandInfo[$message[1];aliases]==];true;$commandInfo[$message[1];name]];false;$commandInfo[$message[1];name], $replaceText[$commandInfo[$message[1];aliases];,;, ]]\`;no]
$addField[Cooldown:;\`$replaceText[$replaceText[$checkcondition[$commandInfo[$message[1];cd]==];true;None];false;$commandInfo[$message[1];cd]]\`;no]
$addField[Category:;$replaceText[$replaceText[$checkcondition[$commandInfo[$message[1];cat]==];true;None];false;$commandInfo[$message[1];cat]];no]
$addField[Description:;$replaceText[$replaceText[$replaceText[$checkcondition[$commandInfo[$message[1];dec]==];true;None];false;$commandInfo[$message[1];dec]];&guild;$serverName];no]
$addField[Name:;$replaceText[$replaceText[$checkcondition[$commandInfo[$message[1];name]==];true;None];false;$commandInfo[$message[1];name]];no]
$onlyIf[$commandInfo[$message[1];name]!=;{description: $getVar[x] Invalid command name were given.

**Usage**
\`$commandInfo[$commandName;use]\`}{color:RED}]
$footer[Usage Syntax: {require} <optional>]
$let[cache;$executionTime]
$endIf
`
}]