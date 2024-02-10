import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) {
    throw 'Por favor, proporciona un texto';
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);

    const apiUrl = `${apikasu}/api/tools/bingimg?text=${encodeURIComponent(text)}&apikey=${apikeykasu}`;


    for (let i = 0; i < filebuffer.length; i++) {
      const videoResponse = await fetch(fileBuffer[i]);
      const buffer = await videoResponse.buffer();

      const fileName = `bingcreator_${i + 1}.png`;
      await conn.sendFile(m.chat, buffer, fileName, "", m);
  }

    if (response.ok) {
      conn.sendFile(m.chat, buffer, 'imagen.jpg', '', m);
    } else {
      throw 'No se pudo obtener una respuesta válida';
    }
  } catch (error) {
    throw `Ocurrió un error: ${error}`;
  }
};

handler.help = ['bingcreator'];
handler.tags = ['ai'];
handler.command = /^bingcreator$/i;

export default handler;