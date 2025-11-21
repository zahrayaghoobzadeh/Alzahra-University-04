
// Sub Menu in article
function showSubMenu(menuId) {
    // Hide all sub-menus
    var subMenus = document.getElementsByClassName('sub-menu');
    for (var i = 0; i < subMenus.length; i++) {
        subMenus[i].style.display = 'none';
    }

    // Show the selected sub-menu 
    var selectedMenu = document.getElementById(menuId);
    var selectearticle = document.getElementById('general-article');
    if (selectedMenu) {
        selectedMenu.style.display = 'flex';
		selectearticle.style.display='none';
    }
}

// Sub Menu Checked
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.item-menu-checked');
    
    navItems.forEach(item => {
        item.addEventListener('click', function () {
            navItems.forEach(nav => nav.classList.remove('active-article'));
            this.classList.add('active-article');
        });
    });
});




// preloader

const ploader = document.getElementById('p-loader');
const content = document.getElementById('preloader-content');
setTimeout(preloade, 2000);
setTimeout(pcontent, 2300);
function preloade() {
	ploader.style.display = "none";
}
function pcontent() {
	content.style.display = "block";
}

/*====================================*/
// scroll top

const scroll = document.getElementById('scrolltop');
scroll.style.display = "none";
window.addEventListener('scroll', function () {
	if (document.documentElement.scrollTop >= 200) {
		scroll.style.display = "flex";
	} else {
		(document.documentElement.scrollTop === 0)
		scroll.style.display = "none";
	}
})
scroll.addEventListener('click', function () {
	scrollTop(0, 500);

})
function scrollTop(scroll, duration) {
	let doc = document.documentElement;
	let currenttime = duration;
	let speed = 15;
	let animate = () => {
		if (currenttime < 0) return;
		setTimeout(() => {
			doc.scrollTop -= doc.scrollTop / (currenttime / speed);
			currenttime -= speed;
			animate()
		}, speed);
	}
	animate();
}

/*====================================*/

// jQuery
(function ($) {
	"use strict";
	$(document).on('ready', function () {

		/*====================================*/
			// Sticky Header JS

		jQuery(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) {
				$('.header').addClass("sticky");
			} else {
				$('.header').removeClass("sticky");
			}
		});

		
			// Mobile Menu
		$('.menu').slicknav({
			prependTo: ".mobile-nav",
			duration: 300,
			closeOnClick: true,
		});

	});

})(jQuery);