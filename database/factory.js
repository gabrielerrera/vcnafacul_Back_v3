/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

Factory.blueprint('App/Models/User', async (faker, i, data) => {
  return {
    email: data.email || faker.email(),
    password: data.password || faker.password(),
    firstName: faker.first(),
    lastName: faker.last(),
    phone: faker.phone(),
    gender: faker.gender(),
    birthday: faker.date(),
    state: faker.state(),
    city: faker.city(),
    isTeacher: faker.bool(),
  };
});

Factory.blueprint('App/Models/Token', async (faker, i, data) => {
  return {
    type: data.type || 'refreshtoken',
    token: faker.string({ length: 20 }),
  };
});

function enemArea(number) {
  switch (number) {
    case 0:
      return 'Ciências Humanas';
    case 1:
      return 'Ciências Humanas';
    case 2:
      return 'Ciências Humanas';
    default:
      return 'Ciências Humanas';
  }
}

function specificArea(number) {
  switch (number) {
    case 0:
      return 'História';
    case 1:
      return 'Geografia';
    case 2:
      return 'Filosofia';
    case 3:
      return 'Sociologia';
    case 4:
      return 'Química';
    case 5:
      return 'Física';
    case 6:
      return 'Biologia';
    case 7:
      return 'Língua Portuguesa';
    case 8:
      return 'Literatura';
    case 9:
      return 'Inglês';
    case 10:
      return 'Espanhol';
    case 11:
      return 'Artes';
    case 12:
      return 'Educação Física';
    case 13:
      return 'Tecnologia da Informação e Comunicação';
    default:
      return 'Matemática';
  }
}

Factory.blueprint('App/Models/Question', async (faker, i, data) => {
  return {
    question: faker.string({ length: 300 }),
    correct: faker.string(),
    wrong_1: faker.string(),
    wrong_2: faker.string(),
    wrong_3: faker.string(),
    wrong_4: faker.string(),
    enemArea: enemArea(faker.natural({ min: 0, max: 4 })),
    specificArea: specificArea(faker.natural({ min: 0, max: 14 })),
  };
});
