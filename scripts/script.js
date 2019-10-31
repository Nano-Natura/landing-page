$('.carousel').carousel({
		interval: 3000
})


window.onscroll = function () {
		const navbar = document.getElementById('navbar')
		const navlink = document.getElementsByClassName('nav-link')
		const navbarBrand = document.getElementsByClassName('navbar-brand')
		
		if (document.documentElement.scrollTop < 50 ) {
				// on the top
				navbar.style.backgroundColor = "transparent";
				
				for (var i = 0; i < navlink.length; i++) {
						navlink[i].classList.add('text-white')
				}
				
				navbarBrand[0].classList.add('text-white')
				
		} else {
				navbar.style.backgroundColor = "white"
				
				for (var i = 0; i < navlink.length; i++) {
						navlink[i].classList.remove('text-white')
						navlink[i].style.color = "black"
				}
				
				navbarBrand[0].classList.remove('text-white');
				navbarBrand[0].style.color = 'black'
				
		}
		prevScrollPos = currentScrollPos
}
