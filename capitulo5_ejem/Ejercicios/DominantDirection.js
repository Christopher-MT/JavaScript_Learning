function getDominantWritingDirection(text) {
    const LTR = "ltr";
    const RTL = "rtl";
    const TTB = "ttb";
    const Neutral = "neutral";

const LTR_Ranges = [
    [0x0041, 0x005A], // A-Z
    [0x0061, 0x007A], // a-z
    [0x0370, 0x03FF], // Griego y copto
    [0x0400, 0x04FF], // Cirílico
    [0x0100, 0x017F], // Letras latinas extendidas
]

const Neutral_Ranges = [
    [0x0000, 0x002F], // Caracteres de control
    [0x0030, 0x0039], // Números
    [0x003A, 0x0040], // Otros caracteres de puntuación
    [0x005B, 0x0060], // Caracteres de puntuación adicional
    [0x007B, 0x00BF], // Otros caracteres de puntuación adicional
    [0x00D7],         // Multiplicación
    [0x00F7],         // División
]

const RTL_Ranges = [
    [0x0590, 0x05FF],// Hebreo
    [0x0600, 0x06FF], // Árabe básico
    [0x0750, 0x077F], // Árabe extendido-A
    [0x0700, 0x074F], // Siríaco
    [0x08A0, 0x08FF], // Árabe extendido-B
    [0xFB50, 0xFDFF], // Formas de presentación árabe-A
    [0xFE70, 0xFEFF],// Formas de presentación árabe-B
]

const TTB_Ranges = [
    [0x4E00, 0x9FFF], // Caracteres Han (CJK)
    [0x3040, 0x309F], // Hiragana
    [0x30A0, 0x30FF], // Katakana
    [0x1100, 0x11FF], // Hangul jamo
    [0xAC00, 0xD7AF], // Hangul sílabas
]


function scrollThroughInformation(char, ranges) {
    const codePoint = char.codePointAt(0)
    return ranges.some(([start, end]) => codePoint >= start && codePoint <= end)
}


    let ltrCount = 0;
    let rtlCount = 0;
    let ttbCount = 0;
    let neutralCount = 0;
    for (const char of text) {
        if (scrollThroughInformation(char, LTR_Ranges)) {
            ltrCount++;
        } else if (scrollThroughInformation(char, RTL_Ranges)) {
            rtlCount++;
        } else if (scrollThroughInformation(char, TTB_Ranges)) {
            ttbCount++;
        } else if(scrollThroughInformation(char, Neutral_Ranges)){
            neutralCount++;
        }
    }
    if (ltrCount > rtlCount && ltrCount > ttbCount && ltrCount > neutralCount) {
        return LTR;
    } else if (rtlCount > ltrCount && rtlCount > ttbCount && rtlCount > neutralCount) {
        return RTL;
    } else if (ttbCount > ltrCount && ttbCount > rtlCount && ttbCount > neutralCount) {
        return TTB; 
    } else if (neutralCount > ltrCount && neutralCount > rtlCount && neutralCount > ttbCount) {
        return Neutral;
    } else {
        return LTR;
    }
}

console.log(getDominantWritingDirection("Hello! مرحبا"));
console.log(getDominantWritingDirection("שלום עולם"));    
console.log(getDominantWritingDirection("12345")); 
console.log(getDominantWritingDirection("ho مرحبا"));
console.log(getDominantWritingDirection("155654658 holaaa fam مرحبا"));



