const schedule = require("node-schedule");
const { rafaId, irvingId, canalGeneralId, eduId } = require('./config.json');
const { MESES } = require('./constants');

const registrarCobrar = client => schedule.scheduleJob('0 8 2 * *', () => {
    const channel = client.channels.cache.get(canalGeneralId);
    const fecha = new Date();
    const mes = MESES[fecha.getMonth()];
    channel.send(`Este es un amable recordatorio que los usuarios <@${rafaId}> y <@${irvingId}> tienen que pagar la cuota de spotify del mes de **${mes}**`);
});

const registrarPrueba = client => schedule.scheduleJob('*/15 * * * * *', () => {
    const channel = client.channels.cache.get('649055451954282509');
    const fecha = new Date();
    const mes = MESES[fecha.getMonth()];
    channel.send(`Este es un amable recordatorio el usuario <@${eduId}> tienen que pagar la cuota de spotify del mes de **${mes}**`);
})

module.exports = {
    registrarCobrar,
    registrarPrueba,
}