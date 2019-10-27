import app from './App';
import {
    dbConnection
} from './database/openDatabaseConnection';

/**
 * The server object listens on port 4200.
 *
 * @var {number}
 */
const PORT = process.env.APP_PORT || 4200;

app.listen(PORT, dbConnection);