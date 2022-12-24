var botui = new BotUI('dialogue');

    botui.message.bot({
        delay: 200,
        content: "Hi, there👋"
    }).then(function() {
        return botui.message.bot({
            delay: 1000,
            content: "我是 rezhe，是一个ai对话机器人🍭"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 1000,
            content: "是站长东鸟的网络数据形态"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "然后呢？ 😃",
                value: "and"
            },
            {
                text: "说正事！ 🙄",
                value: "gg"
            }]
        })
    }).then(function(res) {
        if (res.value == "and") {
            other()
        }
        if (res.value == "gg") {
            return botui.message.bot({
                delay: 1500,
                content: "![](https://tangbao-1301296093.cos.ap-shanghai.myqcloud.com/blog/bqb/5OAWNP~8U049U6Z%24UYB7%60YU.jpg)"
            })
        }
    });

    var other = function() {
        botui.message.bot({
            delay: 1500,
            content: "😘"
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "21岁，新疆大学牲，电气专业正在上大三"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "因为东鸟很忙所以创造了我作为站长代理在这里跟你聊天"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "虽说如此但是希望你如果有正事还是找他本人比较妙o(*￣︶￣*)o"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "没事跟我说的话我就去斗地主了"
            })
        }).then(function() {
            return botui.action.button({
                delay: 1500,
                action: [{
                    text: "别走，你为什么叫rezhe呢？ 🤔",
                    value: "next"
                }]
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "rezhe的re代表归零，zhe是zhecydn，东鸟的英文名！因为我是东鸟的数据态，所以合二为一"
            })
        }).then(function() {
            return botui.action.button({
                delay: 1500,
                action: [{
                    text: "你最喜欢的事情是啥？",
                    value: "next"
                }]
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "当然是搞事情了，平时喜欢玩游戏看动漫什么的，不过如果有赚钱的事情我也很感兴趣~"
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "如果我的网站内容能帮到你的话，那么是我的荣幸 😊"
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "那么，仔细看看我的博客吧？ ^_^"
            })
        });
    }
