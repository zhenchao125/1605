/**
 * Created by lzc on 2017/2/23.
 */
window.onload = function () {
    /*三个游戏玩家*/
    var players = [new Player("貂蝉"), new Player("吕布"), new Player("张三")];
    /*创建一个游戏对象*/
    var game = new Game(players, new Poke());
    /*开始游戏*/
    game.startGame();

    /*代表游戏本身这个对象*/
    function Game(players, poke) {
        /*参与游戏的玩家*/
        this.players = players;
        /*游戏中的道具*/
        this.poke = poke;
        /*游戏具有可以发牌的功能*/
        this.sendCards = function () {
            var players = this.players;
            //给参与游戏的每一个玩家发牌
            this.poke.cards.forEach(function (card, index) {
                var i = index % 3;
                players[i].cards.push(card);

            })
        }
        this.showCard = function () {
            /*在页面展示每个玩家的牌*/
            for (var player of this.players) {
                var cards = player.cards;
                console.log(player.name + ":" + cards.join(","));
            }

        }

        /*游戏开始的函数*/
        this.startGame = function () {
            /*先洗牌*/
            this.poke.shuffle();
            /*发牌*/
            this.sendCards();
            this.showCard();
        }
    }

    /*代表游戏总的玩家*/
    function Player(name) {
        /*玩家的姓名*/
        this.name = name;
        /*存储当前玩家手中的牌*/
        this.cards = [];
    }

    /*一副扑克牌*/
    function Poke() {
        /*一张牌  card*/
        function Card(point, color) {
            this.point = point;
            this.color = color;
            /*如果直接输出一个对象的时候，就是输出的这个对象的toString方法的返回值*/
            this.toString = function () {
                return this.color + this.point;
            }
        }

        /*存储这副牌所有的card*/
        this.cards = [];

        /*向这幅牌中初始化所有的牌*/
        (function (cards) {
            var colors = ["♠", "♣", "♦", "♥"];
            var points = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
            for (var i = 0; i < colors.length; i++) {
                for (var j = 0; j < points.length; j++) {
                    var c = new Card(points[j], colors[i]);
                    cards.push(c);
                }
            }
            cards.push(new Card("", "大王"))
            cards.push(new Card("", "小王"))
        })(this.cards);
        /*洗牌*/
        this.shuffle = function () {
            /*for (var i = 0; i < 100; i++) {
                var cards = this.cards;
                var n1 = parseInt(Math.random() * cards.length);
                var n2 = parseInt(Math.random() * cards.length);
                var temp = cards[n1];
                cards[n1] = cards[n2];
                cards[n2] = temp;
            }*/
            for(var i = 0; i < 10; i++){
                this.cards.sort(function (a, b) {
                    return Math.random() > 0.5 ? 1 : -1;
                });
            }
        }
    }
}
