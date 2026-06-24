// commands/forwarder.js
const SOURCE_GROUP = '120363428389082831@g.us';
const TARGET_GROUP = '120363424960811886@g.us';

module.exports = {
  name: 'forwarder',
  async execute(sock, message) {
    // Check if message is from source group and contains image
    if (message.key.remoteJid === SOURCE_GROUP && message.message?.imageMessage) {
      await sock.sendMessage(TARGET_GROUP, {
        forward: message
      });
      console.log('✅ Image forwarded automatically');
    }
  }
};
