const footer = document.querySelector('footer');
footer.addEventListener('click', function() {
    console.log('clique');
});

let clickCount = 0;
footer.addEventListener('click', function() {
    clickCount++;
    console.log('clic numéro ' + clickCount);
});

const hamburgerButton = document.querySelector('.navbar-toggler');
const navbarHeader = document.getElementById('navbarHeader');

hamburgerButton.addEventListener('click', function() {
    navbarHeader.classList.toggle('collapse');
});


const cards = document.querySelectorAll('.card');
const firstCard = cards[0];
const firstCardText = firstCard.querySelector('.card-text');
const firstCardEditButton = firstCard.querySelector('.btn-outline-secondary');

firstCardEditButton.addEventListener('click', function() {
    firstCardText.style.color = 'red';
});

const secondCard = cards[1];
const secondCardText = secondCard.querySelector('.card-text');
const secondCardEditButton = secondCard.querySelector('.btn-outline-secondary');

secondCardEditButton.addEventListener('click', function() {
    if (secondCardText.style.color === 'green') {
        secondCardText.style.color = '';
    } else {
        secondCardText.style.color = 'green';
    }
});

const navbar = document.querySelector('.navbar');
const bootstrapLink = document.querySelector('link[href*="bootstrap"]');
let bootstrapDisabled = false;

navbar.addEventListener('dblclick', function() {
    if (bootstrapDisabled) {
        bootstrapLink.disabled = false;
        bootstrapDisabled = false;
    } else {
        bootstrapLink.disabled = true;
        bootstrapDisabled = true;
    }
});

const viewButtons = document.querySelectorAll('.btn-success');

for (let i = 0; i < viewButtons.length; i++) {
    const viewButton = viewButtons[i];
    const card = viewButton.closest('.card');
    const cardText = card.querySelector('.card-text');
    const cardImage = card.querySelector('.card-img-top');
    
    const originalImageWidth = cardImage.style.width || '';
    const originalTextDisplay = cardText.style.display || '';
    
    viewButton.addEventListener('mouseenter', function() {
        cardImage.style.width = '20%';
        cardText.style.display = 'none';
    });
    
    viewButton.addEventListener('mouseleave', function() {
        cardImage.style.width = originalImageWidth;
        cardText.style.display = originalTextDisplay;
    });
}

const rightArrowButton = document.querySelector('.jumbotron .btn-secondary');

if (rightArrowButton) {
    rightArrowButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const cardsContainer = document.querySelector('.album .row');
        
        if (cardsContainer) {
            const cardColumns = cardsContainer.querySelectorAll('.col-md-4');
            
            if (cardColumns.length > 0) {
                const lastColumn = cardColumns[cardColumns.length - 1];
                const firstColumn = cardColumns[0];
                
                cardsContainer.insertBefore(lastColumn, firstColumn);
            }
        }
    });
}

const leftArrowButton = document.querySelector('.jumbotron .btn-primary');

if (leftArrowButton) {
    leftArrowButton.addEventListener('click', function(event) {
        event.preventDefault();
        
        const cardsContainer = document.querySelector('.album .row');
        
        if (cardsContainer) {
            const cardColumns = cardsContainer.querySelectorAll('.col-md-4');
            
            if (cardColumns.length > 0) {
                const firstColumn = cardColumns[0];
                const lastColumn = cardColumns[cardColumns.length - 1];
                
                if (lastColumn.nextSibling) {
                    cardsContainer.insertBefore(firstColumn, lastColumn.nextSibling);
                } else {
                    cardsContainer.appendChild(firstColumn);
                }
            }
        }
    });
}

const logoLink = document.querySelector('.navbar-brand');
const body = document.body;

logoLink.setAttribute('tabindex', '0');

logoLink.addEventListener('keydown', function(event) {
    body.classList.remove('col-4', 'offset-md-4', 'offset-md-8');
    
    const key = event.key.toLowerCase();
    if (key === 'a') {
        body.classList.add('col-4');
    } else if (key === 'y') {
        body.classList.add('col-4', 'offset-md-4');
    } else if (key === 'p') {
        body.classList.add('col-4', 'offset-md-8');
    } else if (key === 'b') {
    }
});
