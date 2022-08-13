module.exports = {
  name: "settings",
  dec: "Change/Modify this guild's settings for &guild",
  use: "settings {option} {value}",
  cat: "Settings",
  perm: "managechannels, manageserver, managemessages",
  code: `
$if[$toLowerCase[$message[1]]==chatbot]
$loop[1;cb]
$elseIf[$toLowerCase[$message[1]]==color]
$loop[1;color]
$endElseIf
$else
$color[$getGlobalUserVar[color]]
$author[Settings available for this guild ($serverName);$userAvatar[$clientID]]
$thumbnail[$replaceText[$replaceText[$checkcondition[$serverIcon==null];true;$userAvatar[$clientID]];false;$serverIcon]]
$description[To change any settings for this guild you need to type \`.settings {option} {value}\`. Value can be found in the option information]
$addField[$replaceText[$replaceText[$checkcondition[$getServerVar[chatbot]==];true;$getVar[x]];false;$getVar[y]] Chat bot:;**Available Value:** \`true {channel}\`, \`false\`.\n**Description:** If this is enable. Our chat bot will run in the selected channel. It will reply to every message just like you chat with your friends.;no]
$endIf
`
}