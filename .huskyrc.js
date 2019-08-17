// const tasks = arr => arr.join(' && ')
module.exports = {
  hooks: {
    // unuseable under windows
    // "prepare-commit-msg": "exec < /dev/tty && npx git cz --hook || true",
    'commit-msg': 'npx commitlint -E HUSKY_GIT_PARAMS'
  }
}
