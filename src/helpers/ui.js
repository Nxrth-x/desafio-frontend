/**
 * @param {string} selector Query selector for the desired element
 * @param {boolean} all
 */
export default function $(selector, all = false) {
  if (all) {
    const element = document.querySelectorAll(selector)
    return element
  }

  const element = document.querySelector(selector)
  return element
}
