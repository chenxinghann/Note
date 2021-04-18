
let $dlgAbout = new Dialog('about');

((dlg) => {
  const reposURL = 'https://github.com/chenxinghann/note/';
  let content = `
    <h1 class="slogan">JSNotepad</h1>
    <hr>
    <div class="info">
      <p>作者：陈星涵</p>
      <p>QQ：1435479950</p>
      <p>仓库地址：<a href="${reposURL}" target="_blank">${reposURL}</a></p>
    </div>
    <input class="btn-ok btn" type="button" value="确定" autofocus>`;

  let $dlg   = dlg.generate(content, '关于“记事本”');
  let $btnOk = $dlg.find('.btn-ok');

  dlg.show = () => {
    $('body').append($dlg);
    dlg.init();
    $btnOk.focus();

    $btnOk.click(dlg.destory);

    $dlg.click((e) => {
      $btnOk.focus();
      e.stopPropagation();
    });
  };
})($dlgAbout);
