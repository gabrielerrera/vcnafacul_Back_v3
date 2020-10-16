const { test, trait } = use('Test/Suite')('Question Register');

trait('Test/ApiClient');
trait('DatabaseTransactions');

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory');

test('it should create a question', async () => {
  const user = await Factory.model('App/Models/User').create();

  const question = await Factory.model('App/Models/Question').create({
    user_id: user.id,
  });
  console.log(question);
});
