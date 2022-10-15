import Phaser from "phaser"

class Demo extends Phaser.Scene {
	constructor() {
		super({})
	}

	init() {
		this.input.once(Phaser.Input.Events.POINTER_DOWN, () => this.scene.restart())
	}

	preload() {}

	create() {
		let basisLoader = new BasisLoader()
		basisLoader.setWebGLContext((this.game.renderer as Phaser.Renderer.WebGL.WebGLRenderer).gl)
		basisLoader.loadFromUrl("bg_test.basis").then((result) => {
			console.log(result)

			this.textures.addGLTexture("basis", result.texture, result.width, result.height)

			let texture = this.textures.get("basis")
			let frame = texture.get()
			frame.setUVs(frame.width, frame.height, frame.u0, frame.v1, frame.u1, frame.v0)

			this.add.image(0, 0, "basis").setOrigin(0, 0)
		})
	}
}

new Phaser.Game({
	type: Phaser.WEBGL,
	parent: "phaser-example",
	width: 800,
	height: 600,
	scene: Demo,
})
