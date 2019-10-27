import {User} from 'server/models/user';

/**
 * Display a listing of the resource.
 *
 * @export
 * @function
 * @name index
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
export async function index(req, res, next) {
  try {
    const {_id} = req.jwtPayload;
    const getUserData = await User.findOne({_id}).select('email username createdAt');
    return res.status(200).json({
      response: {
        data: getUserData,
      },
    });
  } catch (err) {
    // Handle error.
    next(err);
  }
}

/**
 * Show the form for creating a new resource.
 *
 * @export
 * @function
 * @name create
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function create(req, res, next) {
  //
}

/**
 * Store a newly created resource in storage.
 *
 * @export
 * @function
 * @name store
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function store(req, res, next) {
  //
}

/**
 * Display the specified resource.
 *
 * @export
 * @function
 * @name show
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function show(req, res, next) {
  const {id} = req.params;
  //
}

/**
 * Show the form for editing the specified resource.
 *
 * @export
 * @function
 * @name edit
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function edit(req, res, next) {
  const {id} = req.params;
  //
}

/**
 * Update the specified resource in storage.
 *
 * @export
 * @function
 * @name update
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function update(req, res, next) {
  //
}

/**
 * Remove the specified resource from storage.
 *
 * @export
 * @function
 * @name destroy
 * @param req
 * @param res
 * @param next
 * @returns {void}
 */
export function destroy(req, res, next) {
  const {id} = req.params;
  //
}
