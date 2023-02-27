export default class ColorHelper {


    static getColorRule (bgColor, fontColor) {

        if (fontColor) {
            return fontColor;
        }

        if (!bgColor) return;

        const color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
        const r = parseInt(color.substring(0, 2), 16); // hexToR
        const g = parseInt(color.substring(2, 4), 16); // hexToG
        const b = parseInt(color.substring(4, 6), 16); // hexToB

        return ((((r * 0.299) + (g * 0.587) + (b * 0.114)) > 160) ? 'black' : 'white');
    }

    //https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    static getColorStyle (bgColor, fontColor) {

        let style = 'color:' + this.getColorRule(bgColor, fontColor) + ' !important;';
        return style + 'background-color:'+bgColor+' !important;';
    }
}
