/**
 * ### Helper function to bind functions to the window
 *
 * #### But why?
 *
 * Using scripts with type _module_ makes the function invisible
 * to the window context, so to bind them to the current window context
 * you can use this helper function.
 *
 * @param {Function[]} functions
 */
export function bindFunctionsToWindow(functions) {
  functions.forEach(func => {
    window[func.name] = func
  })
}
