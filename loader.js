window.addEventListener("load", function () {
			var loader = document.getElementById("loader");
			var resume = document.getElementById("resume");
			loader.style.display = "block";
			resume.style.display = "none";

			setTimeout(function () {
				loader.style.display = "none";
				resume.style.display = "block";
			}, 1000);
		});