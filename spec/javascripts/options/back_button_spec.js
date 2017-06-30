describe('backButton', function() {
  'use strict';

  beforeEach(function() {
    fixture.load('back_and_next_buttons_inside_step.html');
  });

  context('on first step', function() {
    it ('hides', function() {
      // given
      var self = $('form');

      // when
      self.stepy();

      // then
      expect(self.find('.stepy-back')).toBeHidden();
    });
  });

  context('on second step', function() {
    it ('shows', function() {
      // given
      var self = $('form').stepy();

      // when
      self.find('fieldset:eq(0) .stepy-next').trigger('click');

      // then
      expect(self.find('fieldset:eq(1) .stepy-back')).toBeVisible();
    });
  });

  context('on last step', function() {
    it ('shows', function() {
      // given
      var self = $('form').stepy();

      // when
      self.find('fieldset:eq(0) .stepy-next').trigger('click');
      self.find('fieldset:eq(1) .stepy-next').trigger('click');

      // then
      expect(self.find('fieldset:eq(2) .stepy-back')).toBeVisible();
    });
  });
});
