import {Schema} from 'mongoose';

/* User Schema */
export const CreateUserSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      minLength: 10,
    },
    email: {
      type: String,
      required: true,
      minLength: 5,
      validate: {
        validator(v) {
          // eslint-disable-next-line no-useless-escape
          return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(v);
        },
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 10,
    },
    email_verified_at: {
      type: Boolean,
      required: false,
      default: false,
    },
    // Reset Password Schema
    reset: {
      token: {
        type: String,
        required: false,
        length: 90,
        expires: '15m',
      },
    },
  },
  {timestamps: true}
);
