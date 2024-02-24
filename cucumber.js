module.exports = {
  default: {
    paths: ["test/features/**/*.feature"],
    import: ["test/support/step_definitions/**/**/*.js"],
    require: ["test/support/hooks/**/*.js"],
  },
};
