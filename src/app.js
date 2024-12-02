const headerStr = 'Details';
const displayNames = ['d1','d2','d3'];
const fieldNames = ['f1','f2','f3'];

const hexColor = '#ad1d2d';
const rowColor1 = 'hsl(0,0,100%)';
const rowColor2 = 'hsl(0,0,90%)';
const padding = '5px';

function generateHeaderHtml(inHColor, inHText) {
    return `<div style="background-color:${inHColor};color:white;padding:5px;"><strong>${inHText}</strong></div>\n`;
}

function generateTblHtml(inCol1, inCol2, inDisplayNames, inFieldNames, inPadding) {
    let hString = '<figure style="width:100%;"><figure class="table;"><table width="100%"><tbody>\n';
    let rowColor = true;

    for (let i in inDisplayNames){
        hString += ' <tr>\n';
        if (rowColor) {
            hString += `    <td style="background-color:${inCol1};padding:${inPadding};width:40%;"><strong>${inDisplayNames[i]}</strong></td>\n`;
            hString += `    <td style="background-color:${inCol1};padding:${inPadding};width:60%;">${inFieldNames[i]}</td>\n`;
        } else {
            hString += `    <td style="background-color:${inCol2};padding:${inPadding};width:40%;"><strong>${inDisplayNames[i]}</strong></td>\n`;
            hString += `    <td style="background-color:${inCol2};padding:${inPadding};width:60%;">${inFieldNames[i]}</td>\n`;
        }
        hString += `    </tr>\n`;
        rowColor = !rowColor;
    }
    hString += '</tbody></table></figure></figure>\n';
    return hString;
}

let content = generateHeaderHtml(hexColor, headerStr);
content += generateTblHtml(rowColor1, rowColor2, displayNames, fieldNames, padding);

console.log(content);