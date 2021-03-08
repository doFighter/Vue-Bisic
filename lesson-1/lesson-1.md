# lesson-1

- 开发工具：VSCode
- 插件：Live Server
- Vue版本：vue-2(开发版)

Vue的官方文档<https://cn.vuejs.org/>
---

## 声明式渲染

Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：

我们在创建的html文件中引入我们需要使用的Vue.js的版本，同时在同一个文件下创建一个专门用来写vue的js文件（在这里就叫做 app.js），然后也将该文件引入到html文件中。

- 需要注意的是，app.js需要放置在body的最末尾！！！


```html
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```
我们在html的body中写下如下代码：
```html
    <div id="vue-app">
        <h3>Hello {{ name }} </h3>
        <!-- 在Vue中需要使用 “{{}}来声明式的读取数据” -->
    </div>
    <script src="app.js"></script>
```
在app.js中我们创建vue应用，如下所示：
```js
    new Vue({
        el:"#vue-app", //el是对标签进行绑定
        data() {
            return {
                name:"孙悟空"
            };
        },
    });
```

我们在VSCode在我们写的html页面中右击鼠标，点击 $open\quad with\quad Live\quad Server$ 就可以在浏览器中打开页面，如下图所示：

<img src="./images/image02.png" width = "150" height = "200" alt="图片名称"/>

我们在浏览器中打开该网页我们就能看到如下显示：

<img src="./images/image01.png" width = "200" height = "50" alt="图片名称"/>

同时，这个data的作用范围是多大呢，我们可以进行测试，当我们写成如下形式：
```html
    <div id="vue-app">
        <h3>Hello {{ name }}</h3>
        <div id="center01">{{ name }}</div>
    </div>
```
你会发现它们两个都会进行显示，当你使用下面这种方式时就会发现失效了：
```html
    <div id="vue-app">
        <h3>Hello {{ name }}</h3>
    </div>
    <div id="center01">{{ name }}</div>
```
当你像这样时，你会发现第二个 div 中的内容是按原样输出的，也就是说这个标签是在 “#vue-app” 这个范围中都是适用的。

---
那么在 $data$ 中的数据出了像上面那样使用外，还可以怎样呢？

当我们写一个链接的时候，在 html 中我们通常会这样写：
```html
    <a href="https://www.baidu.com">baidu</a>
```
但是在Vue中，我们可以先在 $data$ 中定义这个网址：

```js
    data(){
        return {
            website:"https://www.baidu.com",
        };
    }
```
然后下面的链接我们就可以写成下面形式：
```html
    <a v-bind:href="website">baidu</a>
```
我们可以这样理解，使用了Vue的语法，它会先去Vue内部寻找参数是否有定义。

如果当我们要重复写一个标签的话，比如上面的那个超链接，尽管我们已经通过 $v-bind:href="website"$ 简化了，但他仍然太过于繁杂，所以我们还可以将其定义为一个标签，使用方法如下：

- 首先我们先在 $data$ 中定义该标签：
```js
    data() {
        return {
            websiteTag: '<a href="https://www.taobao.com">taobao<a>',
        };
    },
```
- 然后在 $html$ 中使用 $v-html$ 来使用它
```html
    <p v-html="websiteTag"></p>
```
这样我们也能实现超链接的功能，而且在重复工作中，这样的定义无疑更加节省时间。而且如果有复杂的，也可以使用。

---
在Vue中，我们也可以使用函数，定义方式有如下几种：
```js
    new Vue({
        el:"#vue-app",
        methods:{
            haveLunch(){
                return "have lunch"; //函数内的语句可不加分号结束
            }
        }
    });
```
上面是我们一种主要使用的方式，当然我们也可以如下定义函数：
```js
    havelunch:function(){
        return "have lunch";//函数内的语句可不加分号结束
    }
```
以上两种方式都可以进行函数的定义，我们一般推荐使用第一种，因为它更符合我们定义函数的习惯性写法，如果我们要进行传值，可以使用拼接返回，同时也可以使用EL表达式。

在之前的定义中，我们定义了一个  name 变量，那么现在我们两个分别用不同方法返回的函数，看看效果
如下所示：
```js
    new Vue({
        el:"#vue-app",
        data(){
            return {
                name:"孙悟空"
            };
        },
        methods:{
            greet(){
                return "have lunch "+this.name
            },
            greetEL(){
                // 使用 EL 表达式返回使用反斜杠 ``
                return `have lunch ${this.name}`
            }
        }
    });
```
这两种方式我们都能得到想要的结果:
> have lunch 孙悟空

那函数中的参数是怎样传递的呢？我们可以在函数内定义一个 $name = "孙悟能"$ ，我们发现，使用 $this.name$ 得到的是在 $data$ 中定义的参数，而当我们将 $this.name$ 改写成 $name$ ,得到的输出便是：
>  have lunch 孙悟能

---
当我们在使用其他语言时，其他语言都可以通过函数传参，而在这里，是一样的，也是可以通过函数传参，且你不需要规定传递的类型，但是你自己必须做到使用它时的类型是上下统一的，当有多个参数时，就会根据参数位置进行接收。
实例如下：
```js
    greet(time, num) {
        boy = "哪吒"
        return `good ${time} ${this.name} ${boy} ${num}`
    }
```

然后我们在 html 中使用该函数，发现不管传两个字符串，数字它都能接收并显示，且根据你的对应位置来接受对应值。









