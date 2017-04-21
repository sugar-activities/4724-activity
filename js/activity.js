define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var api = require("lib/grapi.js");

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {
		
		var myButton = document.getElementById("gravatar-button");
		myButton.onclick = function () {
			email = prompt("Type your Gravatar e-mail:", "If you don't a Gravatar account. Sign up at Gravatar.com :)");
			var canvas = document.getElementById("canvas");
			canvas.innerHTML = '<br><center>' + email + "'s Gravatar Picture:" + '</center><br><center><img src="' + gravatar_image(email, 500) + '"></center>';	
}

		
		
		
        // Initialize the activity.
        activity.setup();

    });

});
