const h1 = document.querySelector('.hello h1');

function handleH1Click() {
    const colorChClass = 'colorCh';
    if (h1.className === "") {
        h1.className = colorChClass;
    } else {
        h1.className = "";
    }

    // h1.classList.toggle(colorChClass);
}

hello.addEventListener('click', handleHelloCLick);

