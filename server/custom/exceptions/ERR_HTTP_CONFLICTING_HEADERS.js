import {ERR_BASE_EXCEPTION} from './ERR_BASE_EXCEPTION';

export class ERR_HTTP_CONFLICTING_HEADERS extends ERR_BASE_EXCEPTION {
  /**
   * The HTTP request contains headers with conflicting information.
   *
   * @param message
   * @param fileName
   * @constructor
   */
  constructor(message, fileName = null) {
    // Overriding both message and status code.
    super(
      message || 'The HTTP request contains headers with conflicting information',
      400,
      fileName
    );
  }
}
