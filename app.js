const date = document.getElementById('date')
const setCurrentYear = () => {
	const currentYear = new Date().getFullYear()
	date.textContent = currentYear
}
setCurrentYear()

// hamburger menu
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')
const socials = document.querySelector('.social-nav')
const navLinks = document.querySelectorAll('.nav-links')

const toggleMobileMenu = () => {
    hamburger.classList.toggle('open');
    navList.classList.toggle('open');
    socials.classList.toggle('open');
    document.body.classList.toggle('open');

    // Lock/unlock scroll
    if (document.body.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};

navLinks.forEach(link => link.addEventListener('click', toggleMobileMenu))
hamburger.addEventListener('click', toggleMobileMenu)

// initialize aos (library for scroll animation)
AOS.init()

window.addEventListener("scroll", () => {
	const nav = document.querySelector(".nav");
	const navcontainer = document.getElementById("navcont");
	if (window.scrollY > 10) {
		navcontainer.style.width = "100%";
		navcontainer.style.borderRadius = "0";
		nav.style.top = "0";
	} else {
		navcontainer.style.width = "90%";
		nav.style.top = "20px";
		navcontainer.style.borderRadius = "8px";
	}
});