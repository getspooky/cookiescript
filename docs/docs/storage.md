## File Storage

In modern web development, file uploads are one of the most commonly used features and Mernless Storage provides an intuitive way to handle the file storage.
By default Mernless uses `multer` to handle file Uploads.

## Multer 

When a web client uploads a file to a server, it is generally submitted through a form and encoded as multipart/form-data. Multer is middleware for Express and Node.js that makes it easy to handle this multipart/form-data when your users upload files.

## How Does Multer Work?

Multer is Express middleware. Middleware is a piece of software that connects different applications or software components. In Express, middleware processes and transforms incoming requests to the server. In our case, Multer acts as a helper when uploading files.

## Storing Files

The uploadFile function may be used to store file contents in `storage` directory.
`server/foundation/filesystem/uploadFile.js`:
```JS
import {diskStorage} from 'multer';
import {disks} from 'config/filesystems';

/**
 * Store the uploaded file on the disk.
 *
 * @function
 * @name uploadFile
 * @param path
 * @param file
 * @param options
 * @returns {void}
 */
export function uploadFile(path, file, options = []) {
  diskStorage({
    // destination is used to determine within which folder the uploaded files should be stored.
    destination(req, file, cb) {
      cb(null, disks.local.root);
    },
    // filename is used to determine what the file should be named inside the folder.
    filename(req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}`);
    },
    fileFilter(req, file, cb) {
      // The function should call `cb` with a boolean
      // to indicate if the file should be accepted

      // To reject this file pass `false`, like so:
      cb(null, false);

      // To accept the file pass `true`, like so:
      cb(null, true);

      // You can always pass an error if something goes wrong:
      cb(new Error("I don't have a clue!"));
    },
  });
}
```