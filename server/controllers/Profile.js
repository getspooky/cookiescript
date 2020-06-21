/*
 * This file is part of the mern-boilerplate project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import User from 'server/models/User';

export async function index(req, res, next) {
  try {
    const {
      _id
    } = req.jwtPayload;
    const getUserData = await User.findOne({
      _id
    }).select('email username createdAt');
    return res.status(200).json({
      data: getUserData
    });
  } catch (err) {
    // Handle error.
    next(err);
  }
}
