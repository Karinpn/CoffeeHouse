


// tab\
$('body').on('click','.coffee-menu__tab-link',function(){
    $('.coffee-menu__tab-link').removeClass('active');
    $(this).addClass('active');
    var href = $(this).attr('href');
    $('.coffee-menu__content-wrapper').removeClass('active').removeClass('in');
    $(href).addClass('active');
    console.log(href)
    setTimeout(function(){
        $(href).addClass('in');
    }, 200);
    return false;
})

// modal

const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (modalLinks.length > 0) {
for (let index = 0; index < modalLinks.length; index++) {
    const modalLink = modalLinks[index];
    modalLink.addEventListener("click", function (e) {
        const modalName = modalLink.getAttribute('href').replace('#','');
        const curentModal = document.getElementById(modalName);
        modalOpen(curentModal);
        e.preventDefault();
    });
}
}
const modalCloseIcon = document.querySelectorAll('.close-modal');
if (modalCloseIcon.length > 0) {
for (let index = 0; index < modalCloseIcon.length; index++) {
    const el = modalCloseIcon[index];
    el.addEventListener('click', function (e) {
        modalClose(el.closest('.modal'));
        e.preventDefault();
    });
}
}

function modalOpen(curentModal) {
if (curentModal && unlock) {
    const modalActive = document.querySelector('.modal.open');
    if (modalActive) {
        modalClose(modalActive, false);
    } else {
        bodyLock();
    }
    curentModal.classList.add('open');
    curentModal.addEventListener("click", function (e) {
        if (!e.target.closest('.modal__content-wrapper')) {
            modalClose(e.target.closest('.modal'));
        }
    });
}
}
function modalClose(modalActive, doUnlock = true) {
if (unlock) {
    modalActive.classList.remove('open');
    if (doUnlock) {
        bodyUnLock();
    }
}
}

function bodyLock() {
const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

if (lockPadding.length > 0) {
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
    }
}
body.style.paddingRight = lockPaddingValue;
body.classList.add('lock');

unlock = false;
setTimeout(function () {
    unlock = true;
}, timeout);
}

function bodyUnLock() {
setTimeout(function () {
    for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = '0px';
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
}, timeout);

unlock = false;
setTimeout(function () {
    unlock = true;
}, timeout);
}

document.addEventListener('keydown', function (e) {
if (e.width === 27) {
    const modalActive = dicument.querySelector('.modal.open');
    modalClose(modalActive);
}
});

/////////////
// more-menu 

function more() {
let elem = document.getElementById('more-menu_1').style.display='block';
            document.getElementById('more-menu_2').style.display='block';
            document.getElementById('more-menu_3').style.display='block';
            document.getElementById('more-menu_4').style.display='block';
            document.getElementById('more-menu_5').style.display='block';
            document.getElementById('more-menu_6').style.display='block';
            document.getElementById('more-menu_7').style.display='block';
            document.getElementById('more-menu_8').style.display='block';
}

// json

fetch("../json/data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => console.error("Ошибка загрузки JSON файла:", error));


  /////////////////////////////////

  const sizeLinks = document.querySelectorAll('.modal__size-link');

  const totalPriceElement = document.getElementById('totalPrice');
  const totalPrice2Element = document.getElementById('totalPrice-2');
  const totalPrice3Element = document.getElementById('totalPrice-3');
  const totalPrice4Element = document.getElementById('totalPrice-4');
  const totalPrice5Element = document.getElementById('totalPrice-5');
  const totalPrice6Element = document.getElementById('totalPrice-6');
  const totalPrice7Element = document.getElementById('totalPrice-7');
  const totalPrice8Element = document.getElementById('totalPrice-8');
  const totalPrice9Element = document.getElementById('totalPrice-9');
  const totalPrice10Element = document.getElementById('totalPrice-10');
  const totalPrice11Element = document.getElementById('totalPrice-11');
  const totalPrice12Element = document.getElementById('totalPrice-12');
  const totalPrice13Element = document.getElementById('totalPrice-13');
  const totalPrice14Element = document.getElementById('totalPrice-14');
  const totalPrice15Element = document.getElementById('totalPrice-15');
  const totalPrice16Element = document.getElementById('totalPrice-16');
  const totalPrice17Element = document.getElementById('totalPrice-17');
  const totalPrice18Element = document.getElementById('totalPrice-18');
  const totalPrice19Element = document.getElementById('totalPrice-19');
  const totalPrice20Element = document.getElementById('totalPrice-20');
  

  sizeLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        // Получила выбранный размер и цену из атрибутов data-size и data-price
        const selectedSize = link.getAttribute('data-size');
        const selectedPrice = link.getAttribute('data-price');
        
        // Обновила отображаемую цену
        totalPriceElement.textContent = `$${selectedPrice}`;
        totalPrice2Element.textContent = `$${selectedPrice}`;
        totalPrice3Element.textContent = `$${selectedPrice}`;
        totalPrice4Element.textContent = `$${selectedPrice}`;
        totalPrice5Element.textContent = `$${selectedPrice}`;
        totalPrice6Element.textContent = `$${selectedPrice}`;
        totalPrice7Element.textContent = `$${selectedPrice}`;
        totalPrice8Element.textContent = `$${selectedPrice}`;
        totalPrice9Element.textContent = `$${selectedPrice}`;
        totalPrice10Element.textContent = `$${selectedPrice}`;
        totalPrice11Element.textContent = `$${selectedPrice}`;
        totalPrice12Element.textContent = `$${selectedPrice}`;
        totalPrice13Element.textContent = `$${selectedPrice}`;
        totalPrice14Element.textContent = `$${selectedPrice}`;
        totalPrice15Element.textContent = `$${selectedPrice}`;
        totalPrice16Element.textContent = `$${selectedPrice}`;
        totalPrice17Element.textContent = `$${selectedPrice}`;
        totalPrice18Element.textContent = `$${selectedPrice}`;
        totalPrice19Element.textContent = `$${selectedPrice}`;
        totalPrice20Element.textContent = `$${selectedPrice}`;
               
        // Убрала класс active у всех ссылок и добавила его только выбранной
        sizeLinks.forEach(sizeLink => {
            sizeLink.classList.remove('active');
        });
        link.classList.add('active');
    });
});


document.querySelectorAll('.modal__additives-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        
        const additivePrice = parseFloat(link.getAttribute('data-additive-price'));
        
        const modalBody = link.closest('.modal__body');
        
        const totalPriceElement = modalBody.querySelector('.modal__price');
        
        const currentPrice = parseFloat(totalPriceElement.textContent.replace('$', ''));
        
        const newPrice = currentPrice + additivePrice;
        
        totalPriceElement.textContent = `$${newPrice.toFixed(2)}`;
    });
});