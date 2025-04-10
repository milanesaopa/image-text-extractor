import { ExtractorFunction } from "@xcrap/parser"
import Tesseract from "node-tesseract-ocr"

export type ExtractTextFromImageOptions = Partial<Tesseract.Config> & {
    transformImageSource?: (src: string) => string
}

export const extractImageText = ({
    transformImageSource,
    tesseractOptions
}: ExtractTextFromImageOptions): ExtractorFunction => {
    return async (element) => {
        const isImage = element.tagName.toLowerCase() === "img"
    
        if (!isImage) {
            throw new Error(`This element is not an image: ${element}`)
        }
    
        const rawImageSource = element.attrs.src
        const transofrmedImageSource = transformImageSource ? transformImageSource(rawImageSource) : rawImageSource
    
        const text = await Tesseract.recognize(
            transofrmedImageSource,
            tesseractOptions
        )
    
        return text
    }
}