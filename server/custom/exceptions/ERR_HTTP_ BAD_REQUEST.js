import {ERR_BASE_EXCEPTION} from './ERR_BASE_EXCEPTION';

export class ERR_HTTP_BAD_REQUEST extends ERR_BASE_EXCEPTION {
  /**
   * Bad Request Error.
   *
   * @param message
   * @param fileName
   * @constructor
   */
  constructor(message, fileName = null) {
    // Overriding both message and status code.
    super(message || 'Bad Request', 400, fileName);
  }
}
