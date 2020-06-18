/*
 * This file is part of the CookieScript project.
 *
 * (c) Yasser Ameur El Idrissi <getspookydev@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import userSchema from 'database/schemas/2020_06_08_create_user_schema';
import config from 'internals/utils/config';

const rounds = config('hashing@bcrypt.rounds');

// pre save middleware.
userSchema.pre('save', async function(next) {
  // Hash given password.
  this.password = await bcrypt.hash(this.password, parseInt(rounds));
  next();
});

// pre validate middleware.
userSchema.pre('validate', async next => {
  next();
});

// pre remove middleware.
userSchema.pre('remove', async next => {
  next();
});

// Compare Password.
userSchema.statics.comparePassword = async function(password, hash) {
  const match = await bcrypt.compare(password, hash);
  if (match) {
    return true;
  } else {
    throw new TypeError(
      'Incorrect Password! Try Another Password'
    );
  }
};

export default mongoose.model('User', userSchema);
