/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    /* RSS
     This suite is all about the RSS
     feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        it('Feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        
        });

        TODO:/* Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Each feed has url' , function(){
            for (let feed of allFeeds){
                expect(feed.url).toBeDefined();
                expect(feed.url.constructor).toBe(String);
                expect(feed.url.length).not.toBe(0);
            }
        });

          TODO: /*Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it ('Each has name',function(){
            for (let feed of allFeeds){
                expect(feed.name).toBeDefined();
                expect(feed.name.constructor).toBe(String);
                expect(feed.name.length).not.toBe(0);

            }
        });

    });


   TODO:/* Write a new test suite named "The menu" */

    describe('The menu', function() {

        TODO: /* Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        
        it('Hidden by default',function(){
            let Hidden = document.body.classList.contains('menu-hidden');
            expect (Hidden).toBe(true);
        });


        TODO: /*  Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    
            it('Toggle when menu icon clicked',function(){
            $('a.menu-icon-link').trigger('click'); // show menu
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('a.menu-icon-link').trigger('click'); // hide menu again
            expect($('body').hasClass('menu-hidden')).toBe(true);

        });



    });
  

         TODO: /*  Write a new test suite named "Initial Entries" */
    describe('The menu', function() {

    
         TODO: /*Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            setTimeout(function() {
                loadFeed(1,done);
            }, 100);
          });
it('Entry elment in the feed container',function(done){
	let feedLength  =document.querySelector('.feed').querySelectorAll('.entry');
	 expect(feedLength.length).toBeGreaterThan(0);
	done();
});

});

     TODO:/* Write a new test suite named "New Feed Selection" */
     describe('New Feed Selection', function() {
     	
         var oldFeed;
         var newFeed;

         TODO:/* Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        beforeEach(function(done) {
            loadFeed(0, function() { //loads the feed at position 1.
                 oldFeed= $('.feed').html();
             
                done();
            });
        });

        it('New feed is loaded', function(done) {
            loadFeed(1, function() {
                newFeed = $('.feed').html();
                expect(newFeed).not.toEqual(oldFeed);
                done();
        });
      
  });

});

}());

