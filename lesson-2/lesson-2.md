# lesson-2

---
## 点击事件

在Vue中，事件的绑定变得更为多样，也更为简单，例如我们想要做一个年龄通过点击来加减的这样一个效果，我们就可以通过如下方法：

```html
<div id="vue-app">
    <button v-on:click="age++">add a year</button>
    <button v-on:click="age--">substract a year</button>
    <p>{{ age }}</p>
</div>
```

我们在Vue的js内添加一个age属性：

```js
new Vue({
    el:"#vue-app",
    data() {
        return {
            age:30,
        };
    }
});
```

然后运行该网页我们就能通过点击  “add a year”以及“substract a year”来对页面上显示的数字进行加一和减一。也就是说我们可以直接对Vue中的元素进行操作。
效果如下图所示：

<image src="./images/image01.png" width="60%"/>

当然，当我们想对age加10也是一样可以的，那么，如果我们需要改变呢？今天要加减1，明天加减10，那么我们可以通过传入参数来改变吗？

答案是当然可以，我们可以在Vue的js代码中添加method，通过方法来改变age，js代码如下(由于避免代码赘述，我直接写添加的代码，也就是放在data后面)：

```js
method:{
    addAge(time){
        this.age += time;
    },
    subAge(time){
        this.age += time;
    }
}
```
然后我们在html中改变click接受的参数，改为方法名：
```html
<button v-on:click="addAge(10)">add ten year</button>
<button v-on:click="subAge(10)">substract ten year</button>
```
当我们点击这两个按钮时，就会出现我们想要看到的结果。
在代码中，我们可以将 “v-on:click” 改写为 “@click”，效果是和上面的一样。

---
## 鼠标事件

在编写网页时，我们时常需要监听鼠标，了解鼠标的动态位置，在Vue中，我们可以通过mousemove来监听，首先我们来看看我们使用mousemove会产生什么(下面的div还是在“vue-app”之下)。

```html
<div id="canvas" v-on:mousemove="updateXY">
    {{ x }},{{ y }}
</div>
```

然后我们在js中添加x，y属性，并添加updateXY方法，具体如下：
```js
data(){
    return {
        x:0,
        y:0,
    };
},
methods:{
    updateXY(event){
        console.log(event);
    }
}
```

之后我们打开浏览器的开发工具中的Console，注意其中的信息。

> 如何打开开发工具：右击网页页面，点击最后面的那个选项“检查”，就会在浏览器弹出一个侧边框，你可以在上面找到一个console的选项，点击切换到上面即可。

当运行页面之后，鼠标移动到 x，y显示的那一行时，我们在Console窗口可以看到有很多信息跳出，我们可以点击其中一个查看其内部的具体信息你会发现其内部会有这么一大堆的数据如下：

```js
altKey: false
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 113
clientY: 178
composed: true
ctrlKey: false
currentTarget: null
defaultPrevented: false
detail: 0
eventPhase: 0
fromElement: null
isTrusted: true
layerX: 113
layerY: 178
metaKey: false
movementX: 27
movementY: 5
offsetX: 106
offsetY: 17
pageX: 113
pageY: 178
```

也就是说通过mousemove监听得到的鼠标事件传回来这么多参数，这其中的参数大家可以详细去了解。

既然有了数据，那也就是说我们可以通过event对数据进行获取并以此进行相应的操作。我们从中获取offsetX和offsetY并赋值给x和y，便能得到鼠标在页面中的坐标，updateXY方法改写如下：

```js
methods:{
    updateXY(event){
        this.x = event.offsetX;
        this.y = event.offsetY;
    }
}
```

保存更新之后我们就能看到页面上x，y的值的变化。为了更好的看到变化，我们为canvas这个div添加css样式，样式代码如下：

```css
#canvas{
    width: 600px;
    padding: 200px 20px;
    text-align: center;
    border: 1px solid #333;
} 
```
将其导入到html中便可看到效果，这时候，当我们的鼠标在样式方框中移动时，x、y的值也在不断地变化。

---
## 双向绑定

 在Vue中，进行双向绑定是极其简单的，只需要使用Vue提供的 v-model ，例如你想要要对一个输入框进行双向绑定，那么便可以通过下列的html代码：

 ```html
<label>姓名</label>
<input type="text" v-model="name">
<p>{{ name }}</p>
 ```

在这里，name 需要事先在Vue 的js中被定义，也就是在data中。这样我们就实现了双向绑定，name的值会随着input文本框中的值改变。

当我们需要时还可以联合 v-on 做动态事件，比如想在用户进行输入时需要弹出提示，那么就可以使用下面的方法“v-on:keyup="method"”，倘若使用这个，那么当在这个输入框使用键盘并且键盘起来时，便会激发这个事件。

实践代码如下：

```html
<label>年龄：</label>
<input type="text" v-on:keyup="enterAge">
```

同时，对应添加的 “enterAge” 方法如下：

```js
enterAge() {
            console.log("正在输入年龄。。。。");
        }
```

这样的话每次键盘弹起来便会在 Console 弹出这句话。

> 完整代码在code文件夹中

