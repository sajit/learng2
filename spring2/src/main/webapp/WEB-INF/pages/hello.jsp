<%@ taglib prefix="c" uri="http://www.springframework.org/tags" %>
<html>
<head>
	<!-- 1. Load libraries -->
	<script src="<c:url value="/resources/vendor/angular2-polyfills.js" />"></script>
	<script src="<c:url value="/resources/vendor/system.src.js" />"></script>
	<script src="<c:url value="/resources/vendor/Rx.js" />"></script>
	<script src="<c:url value="/resources/vendor/angular2.dev.js" />"></script>

	<!-- 2. Configure SystemJS -->

	<script>

		var bootPath = '<c:url value="/resources/heroes/app/boot.js" />';
		var baseUrl = '<c:url value="/resources/heroes/app/" />';
		//console.log('Base Url', baseUrl);
		//console.log('Bootpath', bootPath);
				System.config({
					baseUrl : baseUrl,
					packages: {
						app: {
							format: 'register',
							defaultExtension: 'js'
						}
					}
				});
		System.import(bootPath)
				.then(null, console.error.bind(console));
	</script>
</head>
<body>
	<h1>${message}</h1>
    <my-app>Loading..</my-app>
</body>
</html>