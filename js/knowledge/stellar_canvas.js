(function(modules) {
	var installedModules = {};
	function __webpack_require__(moduleId) {
		if(installedModules[moduleId])
			return installedModules[moduleId].exports;
		var module = installedModules[moduleId] = {
			exports: {},
			id: moduleId,
			loaded: false
		};
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		module.loaded = true;
		return module.exports;
	}
	__webpack_require__.m = modules;
	__webpack_require__.c = installedModules;
	__webpack_require__.p = "";
	return __webpack_require__(0);
})
([	
	function(module, exports, __webpack_require__) {
        'use strict';
        var stellar = __webpack_require__(1);
        stellar.init();
	},
	function(module, exports) {
	    'use strict';
        //宣告場景、渲染器、鏡頭、星星背景、第一人稱控制
        var scene = undefined,
            renderer = undefined,
            camera = undefined,
            particleSystem = undefined, 
            control = undefined;

        var Sun = undefined,
            MStellar = undefined,
            GStellar = undefined,
            FStellar = undefined,
            AStellar = undefined,
            OStellar = undefined,
            stars = [];

        var cameraFar = 3000; //鏡頭距離

        var starNames = {}; //指向對象的名字
        var displayName = undefined; //顯示當前的名字

        var clock = new THREE.Clock(); //第一人稱控制需要

        var canvas = document.getElementById('stellar_canvas');

        var raycaster = new THREE.Raycaster(); //指向雷射
        var mouse = new THREE.Vector2(); //滑鼠螢幕向量

	    module.exports = {
            //初始化
	        init: function init() {
                var _this = this;
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;

                //renderer
                renderer = new THREE.WebGLRenderer({ canvas: canvas });
                renderer.shadowMap.enabled = true; //輔助線
                renderer.shadowMapSoft = true; //柔和陰影
                renderer.setClearColor(0xffffff, 0);

                //stellar
                scene = new THREE.Scene();

                //camera
                camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, cameraFar);
                camera.position.set(-150, 20, 10);
                camera.lookAt(new THREE.Vector3(0, 0, 0));
                scene.add(camera);

                //Sun Skin Pic
                var sunSkinPic = THREE.ImageUtils.loadTexture('img/knowledge/source/sunCore.jpg', {}, function () {
                        renderer.render(scene, camera);
                });

                //Sun
                Sun = new THREE.Mesh(new THREE.SphereGeometry(4, 16, 16), new THREE.MeshLambertMaterial({
                        /*color: 0xffff00,*/
                        emissive: 0xdd4422,
                        map: sunSkinPic
                }));
                Sun.name = 'Sun';
                Sun.castShadow = true;
                Sun.receiveShadow = true;
                scene.add(Sun);

                /*opacity sun*/
                var opSun = new THREE.Mesh(new THREE.SphereGeometry(6, 16, 16), new THREE.MeshLambertMaterial({
                        color: 0xff0000,
                        /*emissive: 0xdd4422,*/
                        transparent: true,
                        opacity: 0.35
                }));

                opSun.name = 'Sun';
                scene.add(opSun);

                //Stellar
                MStellar = this.initPlanet('M-Stellar',0.02,0,'rgb(255,0,0)',20,2);
                stars.push(MStellar);

                GStellar = this.initPlanet('G-Stellar',0.012,0,'rgb(255,215,0)',30,4);
                stars.push(GStellar);
            
                FStellar = this.initPlanet('F-Stellar',0.010,0,'rgb(240,240,240)',40,4);
                stars.push(FStellar);
            
                AStellar = this.initPlanet('A-Stellar',0.008,0,'rgb(135,206,250)',60,8);
                stars.push(AStellar);
            
                OStellar = this.initPlanet('O-Stellar',0.006,0,'rgb(0,51,255)',80,16);
                stars.push(OStellar);

                //環境光
                var ambient = new THREE.AmbientLight(0x999999);
                scene.add(ambient);

                //太陽光
                var sunLight = new THREE.PointLight(0xddddaa, 1.5, 500);
                scene.add(sunLight);

                //背景星星
                var particles = 20000; //星星数量
                
                //buffer做星星
                var bufferGeometry = new THREE.BufferGeometry();

                var positions = new Float32Array(particles * 3);
                var colors = new Float32Array(particles * 3);

                var color = new THREE.Color();

                var gap = 1000; //星星出現的位置

                for (var i = 0; i < positions.length; i += 3) {

                    // positions

                    /*-2gap < x < 2gap */
                    var x = Math.random() * gap * 2 * (Math.random() < .5 ? -1 : 1);
                    var y = Math.random() * gap * 2 * (Math.random() < .5 ? -1 : 1);
                    var z = Math.random() * gap * 2 * (Math.random() < .5 ? -1 : 1);

                    //找出x,y,z中絕對值最大的一個數
                    var biggest = Math.abs(x) > Math.abs(y) ? Math.abs(x) > Math.abs(z) ? 'x' : 'z' : Math.abs(y) > Math.abs(z) ? 'y' : 'z';

                    var pos = { x: x, y: y, z: z };

                    //如果最大值比n小,則n為(-n)
                    if (Math.abs(pos[biggest]) < gap) pos[biggest] = pos[biggest] < 0 ? -gap : gap;

                    x = pos['x'];
                    y = pos['y'];
                    z = pos['z'];

                    positions[i] = x;
                    positions[i + 1] = y;
                    positions[i + 2] = z;

                    // colors

                    //70%星星有顏色
                    var hasColor = Math.random() > 0.3;
                    var vx = undefined,
                        vy = undefined,
                        vz = undefined;

                    if (hasColor) {
                            vx = (Math.random() + 1) / 2;
                            vy = (Math.random() + 1) / 2;
                            vz = (Math.random() + 1) / 2;
                    } else {
                            vx = 1;
                            vy = 1;
                            vz = 1;
                    }

                    color.setRGB(vx, vy, vz);

                    colors[i] = color.r;
                    colors[i + 1] = color.g;
                    colors[i + 2] = color.b;
                }

                bufferGeometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
                bufferGeometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
                bufferGeometry.computeBoundingSphere();

                //星星的material
                var material = new THREE.PointsMaterial({ size: 6, vertexColors: THREE.VertexColors });
                particleSystem = new THREE.Points(bufferGeometry, material);
                scene.add(particleSystem);

                ///鏡頭控制
                control = new THREE.FirstPersonControls(camera, canvas);
                control.movementSpeed = 100;
                control.lookSpeed = 0.008;
                control.lookVertical = true;

                camera.lookAt(new THREE.Vector3(0, 0, 0));
                window.addEventListener('mousemove', this.onMouseMove, false);

                //初始化指向顯示名字
                this.displayPlanetName();

                renderer.render(scene, camera);
                requestAnimationFrame(function () {
                        return _this.move();
                });
	        },

	        //滑鼠指向反應
	        onMouseMove: function onMouseMove(event) {
	                mouse.x = event.clientX / window.innerWidth * 2 - 1;
	                mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
	        },

	        /**
	         * 初始化行星
	         * @param  {[type]} speed    [description]
	         * @param  {[type]} angle    [description]
	         * @param  {[type]} color    [description]
	         * @param  {[type]} distance [description]
	         * @param  {[type]} volume   [description]
	         * @param  {[type]} ringMsg  [description]
	         * @return {[type]}          [description]
	         */
	        initPlanet: function initPlanet(name, speed, angle, color, distance, volume, ringMsg) {
                var mesh = new THREE.Mesh(new THREE.SphereGeometry(volume, 16, 16), new THREE.MeshLambertMaterial({ color: color }));
                mesh.position.x = distance;
                mesh.receiveShadow = true;
                mesh.castShadow = true;

                mesh.name = name;

                //軌道
                var track = new THREE.Mesh(new THREE.RingGeometry(distance - 0.2, distance + 0.2, 64, 1), new THREE.MeshBasicMaterial({ color: 0x888888, side: THREE.DoubleSide }));
                track.rotation.x = -Math.PI / 2;
                scene.add(track);

                var star = {
                        name: name,
                        speed: speed,
                        angle: angle,
                        distance: distance,
                        volume: volume,
                        Mesh: mesh
                };

                scene.add(mesh);

                return star;
	        },
	        //初始化指向顯示stellar名字
	        displayPlanetName: function displayPlanetName() {
                for (var i = 0; i < stars.length; i++) {
                        nameConstructor(stars[i].name, stars[i].volume);
                }
                nameConstructor('Sun', 4);

                function nameConstructor(name, volume) {
                        var planetName = new THREE.Mesh(new THREE.TextGeometry(name, {
                                size: 4,
                                height: 4
                        }), new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }));
                        planetName.volume = volume;
                        planetName.visible = false;
                        starNames[name] = planetName;
                        scene.add(planetName);
                }
	        },

	        //Steller移動
	        move: function move() {
                var _this2 = this;

                //公轉
                for (var i = 0; i < stars.length; i++) {
                        this.moveEachStar(stars[i]);
                }

                //自轉
                Sun.rotation.y = Sun.rotation.y == 2 * Math.PI ? 0.0008 * Math.PI : Sun.rotation.y + 0.0008 * Math.PI;

                //滑鼠視角控制
                control.update(clock.getDelta());

                //限制相機在xyz正負400以內
                camera.position.x = THREE.Math.clamp(camera.position.x, -400, 400);
                camera.position.y = THREE.Math.clamp(camera.position.y, -400, 400);
                camera.position.z = THREE.Math.clamp(camera.position.z, -400, 400);

                //滑鼠指向顯示Stellar名字
                raycaster.setFromCamera(mouse, camera);
                //交匯點對象
                var intersects = raycaster.intersectObjects(scene.children);
                if (intersects.length > 0) {
                    //取第一個交會對象(最接近相機)
                    var obj = intersects[0].object;

                    var name = obj.name;
                    //把上一個顯示隱藏
                    displayName && (displayName.visible = false);

                    ///如果是有設定名字的東西
                    if (starNames[name]) {
                        starNames[name].visible = true;
                        displayName = starNames[name];
                        //複製stellar位置
                        displayName.position.copy(obj.position);
                        //文字居中
                        displayName.geometry.center();
                        //顯示在stellar上方
                        displayName.position.y = starNames[name].volume + 4;
                        //面向相機
                        displayName.lookAt(camera.position);
                    }
                } else {
                        displayName && displayName.visible && (displayName.visible = false);
                }

                renderer.render(scene, camera);
                requestAnimationFrame(function () {
                    return _this2.move();
                });

                stat.update();
	        },

	        //每一個stellar的公轉
	        moveEachStar: function moveEachStar(star) {
                star.angle += star.speed;
                if (star.angle > Math.PI * star.distance) {
                    star.angle -= Math.PI * star.distance;
                }

                star.Mesh.position.set(star.distance * Math.sin(star.angle), 0, star.distance * Math.cos(star.angle));
	        }
	    };
    }
]);
