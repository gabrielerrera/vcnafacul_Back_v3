/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const User = use('App/Models/User');

/**
  @typedef {import('@adonisjs/framework/src/Request')} Request
  @typedef {import('@adonisjs/framework/src/View')} View
  @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession
   */

class RegisterController {
  /**
   * @param {object} ctx
   * @param {AuthSession} ctx.auth
   * @param {Request} ctx.request
   * @param {View} ctx.view
   */

  async store({ request }) {
    const data = request.only([
      'email',
      'password',
      'firstName',
      'lastName',
      'phone',
      'gender',
      'birthday',
      'state',
      'city',
      'isTeacher',
    ]);

    try {
      const user = await User.create(data);
      return { user };
    } catch (err) {
      return err;
    }
  }
}

module.exports = RegisterController;
