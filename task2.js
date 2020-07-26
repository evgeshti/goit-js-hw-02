const calculateEngravingPrice = function (message, pricePerWord) {
  const engraveMessage = message.toLowerCase().split(' ');
  console.log(engraveMessage);

  for (let i = 0; i < engraveMessage.length; i += 1) {
    const result = engraveMessage.length * pricePerWord;
    return result;
  }
};

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);
