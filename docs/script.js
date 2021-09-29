// $('.fas').hide() //メニュー、ページスクロールを一旦隠してる
const targetElement = document.querySelectorAll(".animationTarget") //htmlのanimationTagetを定義
document.addEventListener('scroll', ()=>{ //スクロールしたとき、下記実行。
  for (let i = 0; i < targetElement.length; i++) { //targetEement（5つ）文下記処理を実行する。
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .8
    //ブラウザ上からanimationTagetまでの距離を取得する。更に
    //animationTarget[i]の高さを取得して、その0.7掛けを取得する。→※すると下記showが要素の上端がちらっとした瞬間に適用されるのを防ぐ。
    if (window.innerHeight > getElementDistance) { //もしgetElementDistanceよりブラウザの内側の高さの方の数が大きくなったら
      targetElement[i].classList.add("show") //animationTagetのクラスにshowクラスを追加する。
    }
    
  }
})
