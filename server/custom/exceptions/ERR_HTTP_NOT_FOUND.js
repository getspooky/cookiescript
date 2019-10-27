import {ERR_BASE_EXCEPTION} from './ERR_BASE_EXCEPTION';

export class ERR_HTTP_NOT_FOUND extends ERR_BASE_EXCEPTION {
  /**
   * Not Found Error.
   *
   * @param message
   * @param fileName
   * @constructor
   */
  constructor(message, fileName = null) {
    // Overriding both message , status code and fileName.
    super(message || 'Not Found', 404, fileName);
  }
}
