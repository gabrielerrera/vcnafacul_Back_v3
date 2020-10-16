/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class StudentSchema extends Schema {
  up() {
    this.create('students', (table) => {
      table.increments();
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      table
        .enum('schooling', ['Full', 'notFull', '1EM', '2EM', '3EM'])
        .notNullable();
      table.boolean('littleCourse').notNullable();
      table
        .enum('typeLittleCourse', ['Public', 'Private', 'not do'])
        .notNullable();
      table.boolean('statusValidation').defaultTo(false);
      table.timestamps();
    });
  }

  down() {
    this.drop('students');
  }
}

module.exports = StudentSchema;
