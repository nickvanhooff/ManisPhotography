interface SrcSetOptions {
  src: string
  baseWidth: number
  baseHeight: number
  quality?: number
  breakpoints?: number[]
}

export function useImage() {
  const generateSrcSet = (options: SrcSetOptions) => {
    const {
      src,
      baseWidth,
      baseHeight,
      quality = 80,
      breakpoints = [398, 768, 1024, 1468]
    } = options

    return breakpoints.map(width => {
      const height = Math.round((width * baseHeight) / baseWidth)
      const finalSrc = `${src}?width=${width}&height=${height}&quality=${quality}`
      return `${finalSrc} ${width}w`
    }).join(', ')
  }

  return {
    generateSrcSet
  }
}
  