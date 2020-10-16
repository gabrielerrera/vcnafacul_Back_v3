/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class QuestionsSchema extends Schema {
  up() {
    this.create('questions', (table) => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table.string('question', 2000).notNullable();
      table.string('correct').notNullable();
      table.string('wrong_1').notNullable();
      table.string('wrong_2').notNullable();
      table.string('wrong_3').notNullable();
      table.string('wrong_4').notNullable();
      table
        .enum('enemArea', [
          'Ciências Humanas',
          'Ciências da Natureza',
          'Linguagens',
          'Matemática',
        ])
        .notNullable();
      table
        .enum('specificArea', [
          'História',
          'Geografia',
          'Filosofia',
          'Sociologia',
          'Química',
          'Física',
          'Biologia',
          'Língua Portuguesa',
          'Literatura',
          'Inglês',
          'Espanhol',
          'Artes',
          'Educação Física',
          'Tecnologia da Informação e Comunicação',
          'Matemática',
        ])
        .notNullable();
      table.string('image');
      table.timestamps();
    });
  }

  down() {
    this.drop('questions');
  }
}

module.exports = QuestionsSchema;
