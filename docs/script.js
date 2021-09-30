// $('.fas').hide() //メニュー、ページスクロールを一旦隠してる
//ファーストビュー100vh対策　DOMの読み込みが完了したらsetOuterHeightが発火
document.addEventListener('DOMContentLoaded', setOuterHeight)

// スマホならtrue, PCならfalse
const isSP = /iPhone|iPod|iPad|Android/i.test(navigator.userAgent)

// 端末の種類をもとにCSS変数を定義
const setOuterHeight = () =>{
  // 端末がスマホなら
  if(isSP){
    // CSS変数 --outer-height に outerHeight px を代入
    document.documentElement.style.setProperty(
      '--outer-height',
      `${window.outerHeight}px`
    )
  }
}

//index.htmlのheader文章、ロードしたら表示するように指定
const scrollElement = document.querySelector('#section1') //headerの文字を定義
window.addEventListener('load', ()=>{                     //ロードしたら下記実行
  scrollElement.classList.add('show')                     //section1に対してshowクラスを付与
  
})

//index.htmlのセクションごとの演出
const targetElement = document.querySelectorAll(".animationTarget") //htmlのanimationTagetを定義
document.addEventListener('scroll', ()=>{                           //スクロールしたとき、下記実行。
  for (let i = 0; i < targetElement.length; i++) {                  //targetEement（5つ）文下記処理を実行する。
    const getElementDistance = targetElement[i]                     //ブラウザ上からanimationTagetまでの距離を取得する。更に
    .getBoundingClientRect().top + targetElement[i]                 //animationTarget[i]の高さを取得して、その0.7掛けを取得する。→※すると下記showが要素の上端がちらっとした瞬間に適用されるのを防ぐ。
    .clientHeight * 0.6

    if (window.innerHeight > getElementDistance) {                  //もしgetElementDistanceよりブラウザの内側の高さの方の数が大きくなったら
      targetElement[i].classList.add("show")                        //animationTagetのクラスにshowクラスを追加する。
    }
  }
})