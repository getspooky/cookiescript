import {ERR_BASE_EXCEPTION} from './ERR_BASE_EXCEPTION';

export class ERR_HTTP_PAYMENT_REQUIRED extends ERR_BASE_EXCEPTION {
  /**
   * Payment Required Error.
   *
   * @param message
   * @param fileName
   * @constructor
   */
  constructor(message, fileName = null) {
    // Overriding both message and status code.
    super(message || 'Payment Required', 402, fileName);
  }
}
