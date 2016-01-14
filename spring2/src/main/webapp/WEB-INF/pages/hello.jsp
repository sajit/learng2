<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>
<html>
<head>
	<!-- 1. Load libraries -->
	<script src="<c:url value="/resources/heroes/node_modules/angular2/bundles/angular2-polyfills.js" />"></script>
	<script src="<c:url value="/resources/heroes/node_modules/systemjs/dist/system.src.js" />"></script>
	<script src="<c:url value="/resources/heroes/node_modules/rxjs/bundles/Rx.js" />"></script>
	<script src="<c:url value="/resources/heroes/node_modules/angular2/bundles/angular2.dev.js" />"></script>
	<script src="<c:url value="/resources/heroes/app/boot.js" />"></script>
	<script src="<c:url value="/resources/heroes/app/component.js" />"></script>

	<!-- 2. Configure SystemJS -->
	<script>
		System.config({
			packages: {
				app: {
					format: 'register',
					defaultExtension: 'js'
				}
			}
		});
		var bootPath = '<c:url value="/resources/heroes/heroes/app/boot.js" />';
		console.log('Boot Path is ', bootPath);
		System.import(bootPath)
				.then(null, console.error.bind(console));
	</script>
</head>
<body>
	<h1>${message}</h1>

</body>
</html>