module.exports = [{
  name: "version",
  aliases: ["ver", "v"],
  cat: "info",
  dec: "Get PugeAI's version/packages version",
  code: `
  $description[Puge AI : \`$getVar[ver]\`\ndiscord.js : \`v$djsEval[require('discord.js').version;yes]\`\nnodejs : \`$nodeVersion\`\naoi.js : \`v$packageVersion\`]
  $color[BLUE]
  `
}]