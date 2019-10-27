export class ERR_BASE_EXCEPTION extends Error {
  /**
   * ERR_BASE_EXCEPTION constructor
   *
   * @name ERR_BASE_EXCEPTION
   * @param message
   * @param statusCode
   * @param fileName
   * @constructor
   */
  constructor(message, statusCode = 500, fileName = null) {
    // Calling parent constructor of base Error class.
    super(message);
    // Saving class name in the property of our custom error as a shortcut.
    this.name = this.constructor.name;
    // When a link is provided, we append a new line to the error message but only in the dev mode
    if (process.env.NODE_ENV === 'development' && fileName) {
      this.message = `${message}\n> More details: ${fileName}`;
    }
    // Set error message
    Object.defineProperty(this, 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true,
    });
    // Set status as a public property
    Object.defineProperty(this, 'statusCode', {
      configurable: true,
      enumerable: false,
      value: statusCode,
      writable: true,
    });
    // Set fileName as a public property
    Object.defineProperty(this, 'fileName', {
      configurable: true,
      enumerable: false,
      value: fileName,
      writable: true,
    });
    // Capturing stack trace, excluding constructor call from it.
    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
