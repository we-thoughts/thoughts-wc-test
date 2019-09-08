module.exports = {
  "branch": "master",
  "dryRun": false,
  "debug": false,
  "ci": false,
  "tagFormat": "v${version}",
  "plugins": [
    // https://github.com/semantic-release/commit-analyzer
    ["@semantic-release/commit-analyzer", {
      "preset": "angular",
      "releaseRules": [
        { "type": "docs", "scope": "README", "release": "patch" },
        { "type": "refactor", "release": "patch" },
        { "type": "style", "release": "patch" },
        { "type": "chore", "release": "patch" },
        { "scope": "no-release", "release": false }
      ],
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      }
    }],
    // https://github.com/semantic-release/release-notes-generator
    ["@semantic-release/release-notes-generator", {
      "preset": "angular",
      "parserOpts": {
        "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
      },
      "writerOpts": {
        "commitsSort": ["subject", "scope"]
      }
    }],
    // https://github.com/semantic-release/changelog
    ["@semantic-release/changelog", {
      "changelogFile": "docs/CHANGELOG.md",
    }],
    // https://github.com/semantic-release/github/blob/master/README.md
    ["@semantic-release/github", {
      "assets": [
        { "path": "dist/thoughts-wc-test.js", "label": "Single Web Component JS File distribution" }
      ],
      "successComment": false,
      "failComment": false,
      "labels": false
    }],
    // "@semantic-release/npm",
  ]
}
