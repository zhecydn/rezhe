var botui = new BotUI('dialogue');

    botui.message.bot({
        delay: 200,
        content: "Hi, there👋"
    }).then(function() {
        return botui.message.bot({
            delay: 1000,
            content: "我是 芸豆玥，你也可以叫我汤包🍭"
        })
    }).then(function() {
        return botui.message.bot({
            delay: 1000,
            content: "他不是plmm！！！"
        })
    }).then(function() {
        return botui.action.button({
            delay: 1500,
            action: [{
                text: "然后呢？ 😃",
                value: "and"
            },
            {
                text: "少废话！ 🙄",
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
                content: "15岁，是初二"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "略懂 HTML/PHP/JAVA，有空也会研究SSH"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "不过还是比较熟悉开服以及找plmm，最擅长白嫖o(*￣︶￣*)o"
            })
        }).then(function() {
            return botui.message.bot({
                delay: 1500,
                content: "喜欢折腾，热爱折腾，目前正在计算机一道上探索中"
            })
        }).then(function() {
            return botui.action.button({
                delay: 1500,
                action: [{
                    text: "为什么叫 芸豆玥-汤包 呢？ 🤔",
                    value: "next"
                }]
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "芸豆玥是一次起BOT名字时偶然打出了这个名字，于是我就给自己用了！"
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
                content: "当然是折腾事情了，不是在折腾就是在折腾事情的路上~"
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "如果我的文章对你有所帮助的话，那么是我的荣幸 😊"
            })
        }).then(function(res) {
            return botui.message.bot({
                delay: 1500,
                content: "那么，仔细看看我的博客吧？ ^_^"
            })
        });
    }
