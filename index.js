function PullDown()
{
  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")
  const pullDownChild = document.querySelectorAll(".pull-down-list")
  const currentList = document.getElementById("current-list")

  pullDownButton.addEventListener('mouseover', function(){
    // style属性の「上書き」
    this.setAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style")
  })

  pullDownButton.addEventListener('click', function(){
    // style属性が 完全に "display:block;" と一致している場合のみtrue
    if (pullDownParents.getAttribute("style") == "display:block;")
    {
      pullDownParents.removeAttribute("style")
    }
    else
    {
      pullDownParents.setAttribute("style", "display:block;")
    }
  })

  pullDownChild.forEach(function(list){
    list.addEventListener('click', function() {
      // クリックされたリスト項目のHTML要素の文字列を取得する
      const value = list.innerHTML
      currentList.innerHTML = value
    })
  })
}
// Webページが完全に読み込まれた瞬間に、PullDownという関数を実行する
window.addEventListener('load', PullDown)



function practice()
{
  const name = "Tom"
  const age = 25
  const introduction = `私の名前は${name}、${age}歳です`

  const num = 60
  if (num % 15 == 0)
  {
    console.log(`${num}は3と5の倍数です`)
  } 
  else if (num % 3 == 0)
  {
    console.log(`${num}は3の倍数です`)
  }
  else if (num % 5 == 0)
  {
    console.log(`${num}は5の倍数です`)
  }
  else
  {
    console.log(`${num}は3の倍数でも、5の倍数でもありません`)
  }

  const list = ["Ruby", "Ruby on Rails", "JavaScript", "HTML", "CSS"]
  console.log(list)
  console.log(list[2])

  list.forEach( function(item) {
    console.log(item)
  })

  let count = 1
  for (let i = 1; i <= 10; i += 1)
  {
    console.log(`${count}回目の出力`)
    count +=  1
  }

  function sayHello()
  {
    console.log("こんにちは！")
  }
  sayHello()

  let human = { 
    name: "Jhon",
    talk: function(){
      console.log(`私の名前は${human.name}`)
    }
    // 同義
    // talk: ()=>{
    //   console.log(`私の名前は${human.name}`)
    // }
  }
  console.log(human)
  human.age = 25
  human['address'] = 'Tokyo'
  console.log(human)
  human.talk()
}



class Sample
{
  static class_shared_data = 0;
  // ここから
  name;　// インスタンス変数（クラスのインスタンスごとに異なる値を持つことができる）
  age = 20; // 初期値付きもOK
  SetBasicInfo(name, age)
  {
    this.name = name
    this.age = age
  }
  // ここまでは、以下５行と同義
  // constructor(name, age)
  // {
  //   this.name = nane
  //   this.age = age
  // }
  #secret = 1;
  GetSecretValue()
  {
    return this.#secret;
  }
}

export default Sample;
// import Sample from './index';

class SampleInherit extends Sample
{
  constructor(name, age)
  {
    super(name, age); // constructorをオーバーライドしたら必ずsuper()が必要。
  }
}
