require.config({
	"packages": [
		{
			"name": "dtreemap",
			"location": "dtreemap-build"
		},
		{
			"name": "dcolor",
			"location": "dcolor-build"
		},
		{
			"name": "dpointer",
			"location": "dpointer-build"
		},
		{
			"name": "delite",
			"location": "delite-build"
		}
	]
});
define(["dtreemap/layer","dcolor/boot","dpointer/boot","delite/boot"], function(){});