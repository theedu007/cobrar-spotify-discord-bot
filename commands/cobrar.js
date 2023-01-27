const { SlashCommandBuilder } = require("discord.js");
const { rafaId, irvingId, canalGeneralId, eduId } = require('../config.json');
const { MESES } = require('../constants');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cobrar')
        .setDescription('Este comando sirve para enviar un mensjae de cobro de las cuotas de sporify'),
    async execute(iteraction) {
        const fecha = new Date()
        const mes = MESES[fecha.getMonth()];
        await iteraction.reply(`<@${rafaId}> y <@${irvingId}> no han pagado el mes de **${mes}**`)
    }
}