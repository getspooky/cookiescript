import mongoose from 'mongoose';
import {hash, compare} from 'bcrypt';
import hashConfig from 'config/hashing';
import {CreateUserSchema} from 'server/database/schemas/2019_09_08_create_user_schema';

const {salt} = hashConfig;

// pre save middleware.
CreateUserSchema.pre('save', async function(next) {
  // Hash given password.
  // eslint-disable-next-line radix
  this.password = await hash(this.password, parseInt(salt));
  next();
});

// pre validate middleware.
CreateUserSchema.pre('validate', async next => {
  next();
});

// pre remove middleware.
CreateUserSchema.pre('remove', async next => {
  next();
});

/**
 * Compare Password.
 *
 * @async
 * @method
 * @name comparePassword
 * @param password
 * @param hash
 * @returns {Promise<boolean>}
 */
CreateUserSchema.statics.comparePassword = async function(password, hash) {
  const match = await compare(password, hash);
  if (match) {
    return true;
  } else {
    throw new Error('Incorrect Password');
  }
};

export const User = mongoose.model('User', CreateUserSchema);
