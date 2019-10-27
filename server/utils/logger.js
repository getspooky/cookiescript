import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import {format, createLogger, transports} from 'winston';

const {prettyPrint, timestamp, combine, printf} = format;

/**
 * Here you can define the configuration settings for the file.
 * @var
 * @type {{file: {filename: *, handleExceptions: boolean, colorize: boolean, level: string, json: boolean, maxsize: number, maxFiles: number}}}
 */
const options = {
  file: {
    filename: path.join(__dirname, '../log/.keep'),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
};

/**
 * Log args into .log file
 *
 * @function
 * @name log
 * @param args
 * @returns {void}
 */
export function log(...args) {
  // This allows flexibility when writing your own transports in case you wish to include a default format with your transport.
  // eslint-disable-next-line no-shadow
  const myFormat = printf(({level, message, timestamp}) => `${timestamp} ${level}: ${message}`);

  createLogger({
    format: combine(timestamp(), prettyPrint(), myFormat),
    transports: [new transports.File(options.file)],
  }).error(args);
}
