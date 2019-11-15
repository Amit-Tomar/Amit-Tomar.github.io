function initThree() {
	const canvas = document.querySelector('#canvas');
	const renderer = new THREE.WebGLRenderer({
		canvas
	});

	const fov = 45;
	const aspect = 2;
	const near = 0.1;
	const far = 100;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.set(0, 0, 10);

	const controls = new THREE.OrbitControls(camera, canvas);
	controls.target.set(0, 0, 0);
	controls.update();

	const scene = new THREE.Scene();
	scene.background = new THREE.Color('white');

	const skyColor = 'white';
	const groundColor = 'white';
	const backgroundIntensity = 2;
	const light = new THREE.HemisphereLight(skyColor, groundColor, backgroundIntensity);
	scene.add(light);
	const objLoader = new THREE.OBJLoader2();
	objLoader.load('./assets/currentDensity.obj', (event) => {
		const root = event.detail.loaderRootNode;
		scene.add(root);
	});

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

	function render() {

		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		renderer.render(scene, camera);

		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);

	var gui = new dat.GUI();
	var obj = { Reset: function () { controls.reset() } };
	gui.add(obj, 'Reset');
}

window.onload = function () {

	initThree();
};

