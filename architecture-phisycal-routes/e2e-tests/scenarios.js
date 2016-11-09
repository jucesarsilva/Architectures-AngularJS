'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('S2it', function() {

  it('should automatically redirect to /master when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/master");
  });

  describe('master', function() {

    beforeEach(function() {
      browser.get('/#!/master');
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('S2it');
    });
      
    it('should add one entity for "saque" ', function() {
        browser.executeScript(function () {
            window.localStorage.clear();
        });
        element(by.model('entity.value')).sendKeys("1,500.00");
        element(by.id('adicionar')).click();
        var entities = element.all(by.repeater('($entityIndex, entity) in entities | orderBy:sortType:sortReverse | itemsPerPage: pageSize track by $entityIndex'));
        expect(entities.count()).toEqual(1);
    }); 
      
    it('should add one entity of "Saque" and exclude one', function() {
        browser.executeScript(function () {
            window.localStorage.clear();
        });
        element(by.model('entity.value')).sendKeys("2,000.00");
        element(by.id('adicionar')).click();
        element(by.id('entity_btn_remove_0')).click();
        var EC = protractor.ExpectedConditions;
        var btn_confirm = element(by.id('btn_remove'));
        browser.wait(EC.visibilityOf(btn_confirm), 500);
        btn_confirm.click();
        var entities = element.all(by.repeater('($entityIndex, entity) in entities | orderBy:sortType:sortReverse | itemsPerPage: pageSize track by $entityIndex'));
        expect(entities.count()).toEqual(1);
    }); 

  });
});
