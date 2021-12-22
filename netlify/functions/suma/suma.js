// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

function Sumar(valorUno, ValorDos) {
  return valorUno + ValorDos;
}

const handler = async (event) => {
  try {
    console.log("%j", event);
    const body = JSON.parse(event.body);
    const valorUno = body.valorUno || 0;
    const valorDos = body.valorDos || 0;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: Sumar(valorUno, valorDos) }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
