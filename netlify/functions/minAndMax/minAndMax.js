// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method

function MinAndMax(valores) {
  let al = valores.length;
  let minimum = valores[al - 1];
  while (al--) {
    if (valores[al] < minimum) {
      minimum = valores[al];
    }
  }

  let ax = valores.length;
  let maximum = valores[ax - 1];
  while (ax--) {
    if (valores[ax] > maximum) {
      maximum = valores[ax];
    }
  }

  return `El valor minimo es ${minimum} y el valor maximo es ${maximum}`;
}

const handler = async (event) => {
  try {
    console.log("%j", event);
    const body = JSON.parse(event.body);
    const valores = body.valores;

    return {
      statusCode: 200,
      body: JSON.stringify({ message: MinAndMax(valores) }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
