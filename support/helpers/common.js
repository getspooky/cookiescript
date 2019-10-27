module.exports = {
  /**
   * Gets the value of an environment variable. Supports boolean, empty and null.
   *
   * @exports
   * @function
   * @name env
   * @param key
   * @param value
   * @returns {string | *}
   */
  env(key, value = null) {
    return process.env[key] || value;
  },
  /**
   * Uppercase the first letter of a string.
   *
   * @exports
   * @function
   * @name str_capitalize
   * @param string
   * @returns {string}
   */
  str_capitalize(string) {
    if (typeof string !== 'string') return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  },
};
