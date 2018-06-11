require('./index.scss')
//根据屏幕宽度来修正html的字体大小，具体为宽度的1/10,因此1rem=宽度的1/10
let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0]
htmlDom.style.fontSize = htmlWidth/10+'px';
window.addEventListener('resize',function(){
	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
	htmlDom.style.fontSize = htmlWidth/10+'px';
});
