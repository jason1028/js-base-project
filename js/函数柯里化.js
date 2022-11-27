function sumFn(a,b,c){return a+ b + c};
let sum = curry(sumFn);
sum(2)(3)(5)//10
sum(2,3)(5)//10

function curry(fn,...args){
    let fnLen = fn.length,
        argsLen = args.length;
    //对比函数的参数和当前传入参数
    //若参数不够就继续递归返回curry
    //若参数够就调用函数返回相应的值
    if(fnLen > argsLen){
      return function(...arg2s){
        return curry(fn,...args,...arg2s)
      }
    }else{
      return fn(...args)
    }
}

for (var i=1; i<=5; i++) {
    (function (i) {
      setTimeout(() => console.log(i), 1000*i)
    })(i)
}

const jsonp = function (url, data) {
    return new Promise((resolve, reject) => {
        // 初始化url
        let dataString = url.indexOf('?') === -1 ? '?' : ''
        let callbackName = `jsonpCB_${Date.now()}`
        url += `${dataString}callback=${callbackName}`
        if (data) {
            // 有请求参数，依次添加到url
            for (let k in data) {
                url += `${k}=${data[k]}`
            }
        }
        let jsNode = document.createElement('script')
        jsNode.src = url
        // 触发callback，触发后删除js标签和绑定在window上的callback
        window[callbackName] = result => {
            delete window[callbackName]
            document.body.removeChild(jsNode)
            if (result) {
                resolve(result)
            } else {
                reject('没有返回数据')
            }
        }
        // js加载异常的情况
        jsNode.addEventListener('error', () => {
            delete window[callbackName]
            document.body.removeChild(jsNode)
            reject('JavaScript资源加载失败')
        }, false)
        // 添加js节点到document上时，开始请求
        document.body.appendChild(jsNode)
    })
}
jsonp('http://192.168.0.103:8081/jsonp', {
    a: 1,
    b: 'heiheihei'
})
.then(result => {
    console.log(result)
})
.catch(err => {
    console.error(err)
})


class Subject{
    constructor(name){
      this.name = name
      this.observers = []
      this.state = 'XXXX'
    }
    // 被观察者要提供一个接受观察者的方法
    attach(observer){
      this.observers.push(observer)
    }
  
    // 改变被观察着的状态
    setState(newState){
      this.state = newState
      this.observers.forEach(o=>{
        o.update(newState)
      })
    }
  }
  
  class Observer{
    constructor(name){
      this.name = name
    }
  
    update(newState){
      console.log(`${this.name}say:${newState}`)
    }
  }
  
  // 被观察者 灯
  let sub = new Subject('灯')
  let mm = new Observer('小明')
  let jj = new Observer('小健')
   
  // 订阅 观察者
  sub.attach(mm)
  sub.attach(jj)
   
  sub.setState('灯亮了来电了')


  const EventUtils = {
    // 视能力分别使用dom0||dom2||IE方式 来绑定事件
    // 添加事件
    addEvent: function(element, type, handler) {
      if (element.addEventListener) {
        element.addEventListener(type, handler, false);
      } else if (element.attachEvent) {
        element.attachEvent("on" + type, handler);
      } else {
        element["on" + type] = handler;
      }
    },
    // 移除事件
    removeEvent: function(element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
      } else if (element.detachEvent) {
        element.detachEvent("on" + type, handler);
      } else {
        element["on" + type] = null;
      }
    },
   // 获取事件目标
    getTarget: function(event) {
      return event.target || event.srcElement;
    },
    // 获取 event 对象的引用，取到事件的所有信息，确保随时能使用 event
    getEvent: function(event) {
      return event || window.event;
    },
   // 阻止事件（主要是事件冒泡，因为 IE 不支持事件捕获）
    stopPropagation: function(event) {
      if (event.stopPropagation) {
        event.stopPropagation();
      } else {
        event.cancelBubble = true;
      }
    },
    // 取消事件的默认行为
    preventDefault: function(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    }
  };


  function sleep(delay) {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < delay) {
      continue;
    }
  }
  
  function test() {
    console.log('111');
    sleep(2000);
    console.log('222');
  }
  
  test()

  //无小数点
let num1 = '1321434322222'
num1.replace(/(\d)(?=(\d{3})+$)/g,'$1,')
//有小数点
let num2 = '342243242322.3432423'
num2.replace(/(\d)(?=(\d{3})+\.)/g,'$1,')

