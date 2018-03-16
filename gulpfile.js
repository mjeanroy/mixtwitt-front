const path = require('path');
const fs = require('fs-extra');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const rollup = require('rollup');
const del = require('del');
const browserSync = require('browser-sync').create();
const log = require('fancy-log');
const colors = require('ansi-colors');

const pkg = require('./package.json');
const rollupConfig = require('./rollup.config');

const ROOT = __dirname;
const NODE_MODULES = path.join(ROOT, 'node_modules');
const SRC = path.join(ROOT, 'src');
const VENDORS = path.join(SRC, 'vendors');

gulp.task('clean', () => {
  return del([
    VENDORS,
  ]);
});

gulp.task('vendors', ['clean'], () => {
  fs.ensureDirSync(VENDORS);

  Object.keys(pkg.dependencies).forEach((id) => {
    const src = path.join(NODE_MODULES, id);
    const dest = path.join(VENDORS, id);

    log(colors.gray(`Copying ${id} from ${src} to ${dest}...`));
    fs.copySync(src, dest);
  });
});

gulp.task('lint', (done) => {
  const inputs = [
    path.join(SRC, 'js', '**', '*.js'),
    path.join(ROOT, '*.js'),
  ];

  return gulp.src(inputs)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('build', () => {
  rollup.rollup(rollupConfig).then((bundle) => (
    bundle.write(rollupConfig.output)
  ));
});

gulp.task('watch', () => {
  const watcher = rollup.watch(rollupConfig);

  watcher.on('event', (event) => {
    log(colors.gray(`Rollup update: ${event.code}`));
  });
});

gulp.task('start', () => {
  browserSync.init({
    server: {
      baseDir: path.join(__dirname, 'src'),
    },
  });
});
