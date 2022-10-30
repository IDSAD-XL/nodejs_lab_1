/**
 * @param {Request} req
 * @param {Response} res
 * @return {Promise}
 * */
export async function hello(req, res) {
  return res.send("Hello!");
}
