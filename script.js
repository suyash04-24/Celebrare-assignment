// Selecting buttons and editor
const boldBtn = document.getElementById('bold-btn');
const italicBtn = document.getElementById('italic-btn');
const underlineBtn = document.getElementById('underline-btn');
const undoBtn = document.getElementById('undo-btn');
const redoBtn = document.getElementById('redo-btn');
const textEditor = document.getElementById('text-editor');

// Add event listeners for buttons
boldBtn.addEventListener('click', () => {
    document.execCommand('bold');
});

italicBtn.addEventListener('click', () => {
    document.execCommand('italic');
});

underlineBtn.addEventListener('click', () => {
    document.execCommand('underline');
});

undoBtn.addEventListener('click', () => {
    document.execCommand('undo');
});

redoBtn.addEventListener('click', () => {
    document.execCommand('redo');
});
