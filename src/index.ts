import { ExtractorFunction } from "@xcrap/parser"
import Tesseract from "node-tesseract-ocr"

export type ExtractTextFromImageOptions = Partial<Tesseract.Config> & {
    transformSrc?: (src: string) => string
}

export const extractImageText = ({
    transformSrc,
    ...tesseractOptions
}: ExtractTextFromImageOptions = {}): ExtractorFunction => {
    return async (element) => {
        const isImage = element.tagName.toLowerCase() === "img"
    
        if (!isImage) {
            throw new Error(`This element is not an image: ${element}`)
        }
    
        const rawImageSource = element.attrs.src
        const transofrmedImageSource = transformSrc ? transformSrc(rawImageSource) : rawImageSource
    
        const text = await Tesseract.recognize(
            transofrmedImageSource,
            tesseractOptions
        )
    
        return text
    }
}

extractImageText({ lang: "eng" })