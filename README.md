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
        url: 'http://localhost:3000/zc.gif', //采集地址，采用发送一张1x1的图片带上参数进行数据采集
        isClick: false, //是否全量点击，监听整个页面所有的点击事件
        uid: '', //采集用户的ID，默认为空
        clickAttr: {
            // dom: ['div'], 需要采集的DOM名称
            // className: ['aaa'], 需要采集的类目，需与DOM名称一起使用，采集某个DOM里有某个类目的DOM节点的数据
            noClassDom: ['a'], //无需类目的采集所有设定的DOM节点的数据
            attr: [{
                objKey: 'clickId', //设定返回数据的名称
                attrKey: 'data-src', //DOM节点需要采集的数据
                isUp: false, // 忘了是什么东西了
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
    nekyRet.watchRead(fun) //忘了
    nekyRet.setData(data) //接收一个参数为需要同时上传给采集中心的数据。
```


# License

MIT