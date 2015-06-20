
/*facebook sharing here */
<button onclick="window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null /* img */, null /* url */, function() {console.log('share ok')}, function(errormsg){alert(errormsg)})">msg via Facebook (with errcallback)</button>


/*Twitter sharing here */
// <!-- unlike most apps Twitter doesn't like it when you use an array to pass multiple files as the second param -->
<button onclick="window.plugins.socialsharing.shareViaTwitter('Message via Twitter')">message via Twitter</button>
<button onclick="window.plugins.socialsharing.shareViaTwitter('Message and link via Twitter', null /* img */, 'http://www.x-services.nl')">msg and link via Twitter</button>

/*Social Media Sharing*/
