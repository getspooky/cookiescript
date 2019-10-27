import {ERR_BASE_EXCEPTION} from './ERR_BASE_EXCEPTION';

export class ERR_HTTP_FORBIDDEN extends ERR_BASE_EXCEPTION {
  /**
   * Forbidden Error.
   *
   * @param message
   * @param fileName
   * @constructor
   */
  constructor(message, fileName = null) {
    // Overriding both message and status code.
    super(message || 'Forbidden', 403, fileName);
  }
}
