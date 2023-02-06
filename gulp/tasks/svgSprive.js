import svgSprite from "gulp-svg-sprite";


export const svgSprive = () => {
	return app.gulp.src(app.path.src.svgicons, {})
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: "SVG",
				massage: "Error: <%= error.massage %>"
		}))
		)

		.pipe(svgSprite({
			mode: {
				symbol:{
          dest: "icons",
					sprite: "../icons/sprite.svg",
					// создать страницу с перечнем иконок
					example:true
				},
        svg:{
          xmlDeclaration: false,
          doctypeDeclaration:false
        }
			},
		}))

		.pipe(app.gulp.dest(app.path.build.images));
}
