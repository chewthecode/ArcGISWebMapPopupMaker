const helpButton = document.getElementById('help');
const helpDialog = document.getElementById('helpDialog');
const closeDialogButton = document.getElementById('closeDialog');

helpButton.addEventListener('click', () => {
    helpDialog.showModal();
});

closeDialogButton.addEventListener('click', () => {
    helpDialog.close();
});

document.getElementById('addRow').addEventListener('click', () => {
    addRows(1);
});

document.getElementById('removeRow').addEventListener('click', () => {
    removeRows(1);
});

document.getElementById('addMultipleRows').addEventListener('click', () => {
    addRows(3);
});

document.getElementById('removeMultipleRows').addEventListener('click', () => {
    removeRows(3);
});

function addRows(count) {
    const container = document.getElementById('inputContainer');
    for (let i = 0; i < count; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        row.innerHTML = `
            <div class="grip"></div>
            <input type="text" placeholder="Display Name" class="displayName">
            <input type="text" placeholder="Field Name" class="fieldName">
        `;
        container.appendChild(row);
    }
}

function removeRows(count) {
    const container = document.getElementById('inputContainer');
    for (let i = 0; i < count; i++) {
        if (container.children.length > 1) { // Ensure at least one row remains
            container.removeChild(container.lastChild);
        }
    }
}

document.getElementById('generate').addEventListener('click', () => {
    const headerStr = document.getElementById('headerInput').value || 'Details';
    const displayNames = Array.from(document.getElementsByClassName('displayName')).map(input => input.value);
    const fieldNames = Array.from(document.getElementsByClassName('fieldName')).map(input => input.value);
    
    // constants for colour and padding settings
    const hexColor = '#ad1d2d';
    const rowColor1 = 'hsl(0,0%,100%)';
    const rowColor2 = 'hsl(0,0%,90%)';
    const padding = '5px';

    let content = generateHeaderHtml(hexColor, headerStr);
    content += generateTblHtml(rowColor1, rowColor2, displayNames, fieldNames, padding);

    document.getElementById('output').value = content;
});

function generateHeaderHtml(inHColour, inHText) {
    return `<div style="background-color:${inHColour};color:white;padding:5px;"><strong>${inHText}</strong></div>\n`;
}

function generateTblHtml(inCol1, inCol2, inDisplay, inFields, inPadding) {
    let hString = '<figure style="width:100%;"><figure class="table;"><table width="100%"><tbody>\n';
    let rowColour = true;

    for (let i in inFields) {
        hString += '  <tr>\n';
        if (rowColour) {
            hString += `    <td style="background-color:${inCol1};padding:${inPadding};width:60%;"><strong>${inDisplay[i]}</strong></td>\n`;
            hString += `    <td style="background-color:${inCol1};padding:${inPadding};width:40%;">{${inFields[i]}}</td>\n`;
        } else {
            hString += `    <td style="background-color:${inCol2};padding:${inPadding};width:60%;"><strong>${inDisplay[i]}</strong></td>\n`;
            hString += `    <td style="background-color:${inCol2};padding:${inPadding};width:40%;">{${inFields[i]}}</td>\n`;
        }
        hString += '  </tr>\n';
        rowColour = !rowColour;
    }
    hString += '</tbody></table></figure></figure>\n';
    return hString;
}

// Initialize SortableJS on the inputContainer
new Sortable(document.getElementById('inputContainer'), {
    animation: 150,
    handle: '.grip',
    ghostClass: 'sortable-ghost'
});

// Dark mode toggle functionality
document.getElementById('toggleDarkMode').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});