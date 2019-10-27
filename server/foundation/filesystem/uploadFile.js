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
