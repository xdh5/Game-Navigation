//初始化数据
var webside = init()
function init(){
    var webside={"W":"cf.qq.com","A":"wow.blizzard.cn","S":"lol.qq.com","D":"dnf.qq.com","1":"yys.163.com","2":"mrzh.163.com","3":"pvp.qq.com","4":"pg.qq.com"}
    if(JSON.parse(localStorage.getItem("data"))){
        webside = JSON.parse(localStorage.getItem("data"))
    }
    return webside
}

//运行函数
keyboard(webside)
icon(webside)

//改图标和地址
function icon(webside){
    var game = document.querySelectorAll(".game img")
    for(var i = 0;i<game.length;i++){
        game[i].src = "https://"+webside[game[i].id]+"/favicon.ico"
        game[i].onerror = function(){
            this.src="img/game.png"
        }
        game[i].onclick = function(){
            var newWebside = prompt('给我一个网址')
            webside[this.id] = newWebside
            this.src = "https://"+webside[this.id]+"/favicon.ico"
            this.onerror = function(){
                this.src="img/game.png"
            }
            localStorage.setItem("data",JSON.stringify(webside))
        }
    }
}

//键盘定位
function keyboard(webside){
    document.onkeypress = function(key){
        var userKey = key['key'].toUpperCase()
        if(webside[userKey] != undefined){
        window.open("https://"+webside[userKey])
        }
    }
}