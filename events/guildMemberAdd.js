module.exports = {
    name: "guildMemberAdd",
    execute(member) {
        const channel = member.guild.channels.cache.get("916042813425201152"); // Make sure this ID is correct and bot has access
        if (!channel) return;

        channel.send({
            content: `🎉 Welcome <@${member.id}> to **${member.guild.name}**! Make sure to check the rules and have fun!`
        });
    }
};
