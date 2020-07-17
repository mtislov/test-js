
let tip;

house.addEventListener('mouseover', function(event) {

    let target = event.target.closest('[data-tooltip]');

    if (!target) return;

    showTip(target);

    target.onmouseout = () => tip.remove();
    console.log(target);
});

function showTip(target) {
    tip = document.createElement('div');
    tip.classList.add('tooltip');
    tip.textContent = target.dataset.tooltip;
    document.body.append(tip);

    tip.style.left = target.offsetLeft + (target.offsetWidth / 2) - (tip.offsetWidth / 2) + 'px';
    tip.style.top = target.offsetTop + target.offsetHeight + 'px';

    return tip;
}