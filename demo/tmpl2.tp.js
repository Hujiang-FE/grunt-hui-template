/* this js depand on hui-template-compile.js*/
HUI.template.compile("tmpl2.tp", function(it) {
  "use strict";
  var espHTML = this._escapeHTML,
    initTmpl = this._template,
    _out = '';
  var arr1 = it;
  if (arr1) {
    var $val, $idx;
    for (var i1 = 0; i1 < arr1.length; i1++) {
      $idx = i1, $val = arr1[i1];
      _out += ' <span>' + espHTML($idx + 1) + '.' + espHTML($val) + ' </span>';
    }
  }
  return _out;
}); /* end tag*/