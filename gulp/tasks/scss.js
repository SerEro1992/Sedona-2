import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename";

import cleanCss from "gulp-clean-css"; //Сжатие CSS файла
import webpcss from "gulp-webpcss"; //Вывод WEBP изображений
import autoprefixer from "gulp-autoprefixer"; //Добавление  вендорных префиксов
import groupCssMediaQueries from "gulp-group-css-media-queries"; //групировка медиа запросов

const sass = gulpSass(dartSass);

export const scss = () => {
	return app.gulp.src(app.path.src.scss, { sourcemaps:app.isDev })

		.pipe(app.plugins.plumber(
			  app.plugins.notify.onError({
				  title: "SCSS",
				  massage: "Error: <%= error.massage %>"
			})))

    .pipe(sass({
			outputStyle: "expanded"
		}))

    .pipe(app.plugins.replace(/@img\//g, "../img/"))


		.pipe(groupCssMediaQueries())

		.pipe( autoprefixer({
					grid: true,
					overrideBrowserlist: ["last 3 versions"],
					cascade: true
		}))
    
		.pipe(
				webpcss({
					webpClass: ".webp",
					noWebpClass: ".no-webp"
				}
		))


		// Раскомментировать если нужен не сжатый дубль файла стилей
		.pipe(app.gulp.dest(app.path.build.css))
		.pipe(cleanCss())

		.pipe(rename({
			extname: ".min.css"
		}))

		.pipe(app.gulp.dest(app.path.build.css , { sourcemaps: '.' }))
		.pipe(app.plugins.browsersync.stream());
}
