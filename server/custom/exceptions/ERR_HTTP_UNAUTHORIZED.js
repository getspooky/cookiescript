import {ERR_BASE_EXCEPTION} from './ERR_BASE_EXCEPTION';

export class ERR_HTTP_UNAUTHORIZED extends ERR_BASE_EXCEPTION {
  /**
   * Unauthorized Error.
   *
   * @param message
   * @param fileName
   * @constructor
   */
  constructor(message, fileName = null) {
    // Overriding both message and status code.
    super(message || 'Unauthorized', 400, fileName);
  }
}
