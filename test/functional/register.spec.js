const { test, trait } = use('Test/Suite')('Register');

trait('Test/ApiClient');
trait('DatabaseTransactions');

test('it should register a new user', async ({ client }) => {
  const newUser = {
    email: 'fernando.almeida.pinto@gmail.com',
    password: '123456',
    firstName: 'Fernando',
    lastName: 'Almeida',
    phone: '11966530488',
    gender: 'Male',
    birthday: '26/06/1989',
    state: 'SP',
    city: 'São Paulo',
    isTeacher: false,
  };

  const response = await client.post('/register').send(newUser).end();

  response.assertStatus(200);
});
