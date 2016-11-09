'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('architecture-phisycal-routes', function() {

  it('should automatically redirect to /master when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });

  describe('master', function() {

    beforeEach(function() {
      browser.get('/');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('architecture-phisycal-routes');
    });
  });
});
