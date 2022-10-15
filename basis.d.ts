declare class BasisLoader {
	setWebGLContext(gl: any): void
	loadFromUrl(url: string): Promise<BasisLoaderResult>
	allowSeparateAlpha: boolean
}

declare interface BasisLoaderResult {
	texture: unknown
	alphaTexture: unknown
	alpha: boolean
	mipLevels: number
	width: number
	height: number
}
