# neky-report
web ubt report.

前端数据采集，UBT方案

```
    无痕埋点,
    用户行为监控,
    访客识别,
    api监控
```

# 安装//Install

```npm
npm install neky-report --save
```

### ES6

```JavaScript
import nekyReport from 'neky-report'

```

### CommonJS

```JavaScript
var nekyReport=  require('neky-report');

```

### 直接引用//Direct include

```JavaScript
<script src="../node_modules/neky-report/src/index.js"></script>
```

# 使用方法//Usage

```JavaScript
    let nekyRet = nekyEeport.init({ 
        url: 'https://localhost:3000/zc.gif', //采集地址，采用发送一张1x1的图片带上参数进行数据采集
        isClick: false, //是否全量点击，监听整个页面所有的点击事件
        uid: '', //采集用户的ID，默认为空，用户数据也可在后续的回调中带上
        clickAttr: {
            // dom: ['div'], 需要采集的DOM名称
            // className: ['aaa'], 需要采集的类目，需与DOM名称一起使用，采集某个DOM里有某个类目的DOM节点的数据
            noClassDom: ['a'], //无需类目的采集所有设定的DOM节点的数据
            attr: [{
                objKey: 'clickId', //设定返回数据的名称
                attrKey: 'data-src', //DOM节点需要采集的数据
                isUp: false, // 是否向逐一向上查找元素
                tag: 'a div' //对应上面设定好的DOM
            },{
                objKey: 'href',
                attrKey: 'href',
                tag: 'a'
            },{
                objKey: 'clicksId',
                attrKey: 'data-url',
                tag: 'a'
            }],
            fun: function (data) {
                return data //点击事件返回上面设定好的数据，可进行改造后再上传给采集中心
            }
        }
    })
```

# API

```JavaScript
    nekyRet.watchApi(name,fun) //接收两个参数被监听的API的名称，以及监听成功后的回调函数。
    nekyRet.watchRead(fun) //页面加载后的一个回调。
    nekyRet.setData(data) //接收一个参数为需要同时上传给采集中心的数据。
```

## cookie设置
    
    _zca：  00000.XXXXX.11111.22222.33333.44444
    _zcb：  00000

## 基础数据/data

    data = {
        //采集代码的版本
        jv: '1.0.0',
        //访客ID
        vid: 1532487238279.1f625pu,
        //用户ID
        uid: xxxxxx,
    }

    data01 = {
        //用户的设备是PC还是Mobile还是Tablet
        device: 'PC',
        //用户操作系统和系统版本
        os: 'Mac 10.12.6',
        //用户浏览器名称和浏览器版本
        browser: 'Chrome 68.0.3440.84',
        //用户的屏幕分辨率
        screen: '970x1920',
        //用户当前访问的页面的URL
        pageUrl: 'https://localhost:3000/'',
        //用户的来源
        referer: 'https://localhost:3000/'',
        //用户的访问路径
        accessPath: https://localhost:3000/, https://localhost:3000/index, https://localhost:3000/index/list,
        //用户浏览器语言
        language: 'zh-CN',
        //用户行为采集的时间
        time: 1533366007865
    }
    
## 基础数据说明
    
### _zca

    0000代表用户第一次访问时生成的时间戳
    XXXX代表用户第一次访问时随机生成的字符串
    111111代表用户上一次访问时生成的时间戳
    22222代表用户当前访问时生成的时间戳
    33333代表用户访问网站的次数（vv）
    44444代表用户访问网站页面的次数（pv）
    
### _zcb:      
    
    一个30分钟后过期的session

### 用户唯一性：

    采用00000+XXXX的方式来确认用户的唯一性。 
    例子：1532487238279.1f625pu     //唯一用户：1532487238279.1f625pu
    
### 用户访问网站的次数：

    用户访问网站后设置一个30分钟后过期的session（_zcb）
    用户任何操作都将更新session（_zcb）
    当session（_zcb）过期或者session（_zcb）不存在时时表示用户重新访问了一次网站
    
### fullpv

    采用00000+XXXX+33333+44444的方式来确认用户完整的PV。
    例子：1532487238279.1f625pu.12.169  //唯一用户：1532487238279.1f625pu  的第 12 次访问网站，访问了169个页面

### 类型说明

    load： //页面加载
        基础数据(data, data01),
        //用户访问网站页面的次数
        pv: fullPv(),
        
    beforeunload:  //页面跳转
        基础数据(data, data01),
        //开始时间
        startTime: 1533633324661,
        //结束时间
        endTime: 1533633324661,
    
    unload:  //页面关闭
        基础数据(data, data01),
        //开始时间
        startTime: 1533633324661,
        //结束时间
        endTime: 1533633324661,

    click:  //点击
        基础数据(data),
        //用户的设备是PC还是Mobile还是Tablet
        device: 'PC',
        //发生点击的页面
        pageUrl: https://localhost:3000
        //点击点在页面的X轴
        pageX: 111,
        //点击点在页面的Y轴
        pageY: 222,
        //发生点击事件按钮的DOM树结构
        domPath: domPath,

    impression //页面展示
        //展示的页面
        pageUrl: https://localhost:3000
        //展示的时间
        time: (new Date).getTime(),
        //展示的用户PV
        pv: fullPv()


# License

MIT
