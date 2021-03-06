var bigmap = document.getElementById('bigmap'),
	smallmap = document.getElementById('smallmap'),
	form = document.getElementById('write-to-us'),
	success = document.getElementById('item-added'),
	openFormBtn = document.getElementById('open-form'),
	tabsNav = document.querySelector(".tabs-nav"),
	maph = document.querySelector('.map-hidden');

if (smallmap)
	smallmap.addEventListener("mouseover", function(){
		bigmap.classList.remove('popup-off');
	});

if (openFormBtn)
	openFormBtn.addEventListener("click", function (event){
		event.preventDefault();
		form.classList.remove('popup-off');
	});

var i = 0;
while (document.getElementsByClassName("btn-close")[i]){
	document.getElementsByClassName("btn-close")[i].addEventListener("click", function(event){
		event.preventDefault();
		var self = this,
			popup = self.parentNode;

		if (popup.classList.contains('zoomIn')){
			popup.classList.remove('zoomIn');
			popup.classList.add('zoomOut');
			setTimeout(function () {
				popup.classList.remove('animated','zoomOut');
				popup.classList.add('popup-off');
			}, 500);
		} else{
			//	popup.style.display = 'none';
			popup.classList.add('popup-off');
		}

	});
	i++;
}

i = 0;
if (tabsNav)
	while (tabsNav.children[i]){
		tabsNav.children[i].children[0].addEventListener("click", function(event){
			event.preventDefault();

			var tabsNav = document.querySelector(".tabs-nav"),
				tabsBody = document.querySelector(".tabs-body");

			// Чистка классов active
			var i1 = 0;
			while (tabsNav.children[i1]){
				tabsNav.children[i1].classList.remove("active");
				tabsBody.children[i1].classList.remove("active");
				i1++;
			}

			// Добавляем active к нужным элементам
			this.parentNode.classList.add("active");

			// Узнаем номер элемента по списку
			i1 = 0;
			while (tabsNav.children[i1]){
				if (tabsNav.children[i1].classList.contains("active")) break;
				i1++;
			}

			// Добавляем к i-ому элементу класс active
			tabsBody.children[i1].classList.add("active");
		});
		i++;
	};

i = 0;
while (document.getElementsByClassName('btn-buy')[i]){
	document.getElementsByClassName('btn-buy')[i].addEventListener("click", function(event){
		event.preventDefault();

		itemAdded.classList.remove('popup-off');
		itemAdded.classList.add('animated', 'zoomIn');
		document.getElementsByClassName('info-cart')[0].style.backgroundColor = "#ee3643";
		cartCounter.innerHTML = parseInt(cartCounter.innerHTML) + 1;
	});
	i++;
}

i = 0;
while (document.getElementsByClassName('btn-bookmark')[i]){
	document.getElementsByClassName('btn-bookmark')[i].addEventListener("click", function(event){
		event.preventDefault();

		bookmarkCounter.innerHTML = parseInt(bookmarkCounter.innerHTML) + 1;
	});
	i++;
}

$(document).ready(function(){
	var owl = $(".slides");
	owl.owlCarousel({
		nav:true,
		items: 1,
		loop: true,
		dots: true});
});