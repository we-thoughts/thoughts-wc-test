// const tasks = arr => arr.join(' && ')
module.exports = {
  hooks: {
    // unuseable under windows
    // "prepare-commit-msg": "exec < /dev/tty && npx git cz --hook || true",
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAM'
  }
}
