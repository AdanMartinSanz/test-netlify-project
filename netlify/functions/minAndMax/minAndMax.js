// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

function MinAndMax(valor) {
  let min = Math.min(valor);
  let max = Math.max(valor);
  return `El valor minimo es ${min} y el valor maximi es ${max}`;
}

const handler = async (event) => {
  try {
    console.log("%j", event);
    const body = JSON.parse(event.body);
    const valores = body.valor;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: MinAndMax(valor) }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
