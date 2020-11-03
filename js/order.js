const dialog = document.getElementById('dialog');

function openOrderDialog() {
    dialog.classList.add('dialog--visible')
    dialog.classList.add('dialog--first-layer')
}

function closeOrderDialog(event) {
    if (
      event.target.classList.contains('mdc-dialog__scrim') ||
      event.target.classList.contains('mdc-button--raised') ||
      event.target.classList.contains('mdc-button__label')
    ) {
        dialog.classList.remove('dialog--visible');
        event.stopPropagation();

        dialog.addEventListener('transitionend', removeFirstLayerClass)
    }
}

function removeFirstLayerClass(event) {
    dialog.classList.remove('dialog--first-layer');
    dialog.removeEventListener('transitionend', removeFirstLayerClass);
}


