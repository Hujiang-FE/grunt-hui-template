/* this js depand on hui-template-compile.js*/
HUI.template.compile("index.tp", function(it) {
  "use strict";
  var espHTML = this._escapeHTML,
    initTmpl = this._template,
    _out = '';
  _out += ' <span>' + espHTML(it.name) + '</span> <br /> ';
  _out += initTmpl('tmpl2.tp', it.weeks);
  _out += '<br /> ';
  if (it.isMale == 'Male') {
    _out += 'aspx';
  }
  _out += ' <table class="default-theme"> <tr> <td>姓名</td> <td>电话</td> <td>QQ</td> <td>学校</td> </tr> ';
  var arr1 = it.peo;
  if (arr1) {
    var $val, $idx;
    for (var i1 = 0; i1 < arr1.length; i1++) {
      $idx = i1, $val = arr1[i1];
      _out += ' <tr> <td> ' + espHTML($val.name) + ' </td> <td> ' + espHTML($val.phone) + ' </td> <td> ' + espHTML($val.qq) + ' </td> <td> ' + espHTML($val.school) + ' </td> </tr> ';
    }
  }
  _out += ' </table> ';
  if (it.isMale) {
    _out += ' <br /> <span>I\'m a guy!</span> ';
    if (it.isOld) {
      _out += ' <br /> <span>I\'m old!</span> ';
    }
    _out += ' ';
  }
  return _out;
}); /* end tag*/