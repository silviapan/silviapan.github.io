$(function() {
	var projects = $('.project-container');
	var prevButtons = $('.prev');
	var nextButtons = $('.next');

	for (i = 1; i < projects.length; i++) {
		projects[i].style.display = 'none';
	}

	$(prevButtons).click(function() {
		var j = $(prevButtons).index(this);
		$(projects[j]).fadeOut(300);
		j--;
		if (j < 0) {
			j = prevButtons.length - 1;
		}
		$(projects[j]).fadeIn(300);
	});
		
	$(nextButtons).click(function() {
		var k = $(nextButtons).index(this);
		$(projects[k]).fadeOut(300);
		k++;
		if (k > nextButtons.length - 1) {
			k = 0;
		}
		$(projects[k]).fadeIn(300);
	});
});