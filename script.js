var text = document.getElementById('text');
var treeLeft = document.getElementById('tree-left');
var treeRight = document.getElementById('tree-right');
var gateLeft = document.getElementById('tree-left');
var gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    var value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * 1.5 + 'px';
    gateLeft.style.left = value * -0.5 + 'px';
    gateRight.style.left = value * -0.5 + 'px';
});