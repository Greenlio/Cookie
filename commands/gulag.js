const Handler = require('../mongo/handler')
const comrades = require('../comrades.json')
const handler = new Handler()
const leFunnyGif = 'https://tenor.com/view/rip-bozo-gif-22294771'

module.exports = {
    name: 'gulag',
    description: 'gulags the fraud',
    cooldown: 5,
    async execute(m) {

        const mString = m.content;
        const mSplit = mString.split(' ')

        const enforcerID = m.author.id;
        const userID = mSplit[2].substring(2, 20)

        let userIsBanned = await handler.isBanned(userID)
        console.log("zamn", userIsBanned)

        if (JSON.stringify(comrades).includes(enforcerID)) {

            if (userIsBanned === false) {
                await handler.setBan(userID).then(() => {
                    m.reply(`User <@${userID}> has been gulaged, ripbozo, no more cookies 4 u lil bro`)
                    m.channel.send(leFunnyGif)
                })
            }
            else {
                await handler.setBan(userID).then(() => {
                    m.reply(`User <@${userID}> is unbanned now <:okay:972868795586719825>`)
                })
            }
        }

        else {
            m.reply('Fat')
        }
    },
};