
function layoutMain(){
    const doc = createElements()
    addClass(doc.mainCont)
    //add class to all cont
}

function addClass(mainCont){
    const containers = mainCont.querySelectorAll('div');
    containers.forEach(container => {
        container.classList.add('cont')
    });
}

function createElements(){
    const mainCont = document.createElement('main');
    const logoCont = document.createElement('div');
    const emptyCont = document.createElement('div');
    const currentCont = document.createElement('div');
    const currDay = document.createElement('div');
    const searchCont = document.createElement('div');
    const windCont = document.createElement('div');
    const nextDay1 = document.createElement('div');
    const nextDay2 = document.createElement('div');
    const nextDay3 = document.createElement('div');
    const body = document.querySelector('body');

    body.appendChild(mainCont)
    mainCont.append(logoCont, emptyCont, currentCont, currDay, searchCont, windCont, nextDay1, nextDay2, nextDay3)

    return {mainCont, logoCont, emptyCont, currentCont, currDay, searchCont, windCont, nextDay1, nextDay2, nextDay3, body}
}

export {layoutMain}