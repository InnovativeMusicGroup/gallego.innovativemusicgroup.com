document.querySelector("h1 span.hollow").classList.add("fade-in");
document.querySelector("h1").classList.add("fade-in");

document.querySelectorAll("a.toggle").forEach(toggleButton => {
	toggleButton.addEventListener("click", event => {
		document.querySelector(`aside.vertical.${event.target.dataset.target}`).classList.toggle("active");
	});
});

document.querySelectorAll("aside.vertical a.close").forEach(closeButton => {
	closeButton.addEventListener("click", event => {
		document.querySelector(`aside.vertical.${event.target.dataset.target}`).classList.toggle("active");
	});
});