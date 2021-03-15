# lesson-3
---

## ref 的妙用

在以往我们需要获取某个节点的信息，可能需要使用document这个属性，但是有了ref之后，我们可以通过ref来获取它所包含的信息。这个属性会帮我们拿到我们想要的值，只要我们事先跟它说好，也就是给需要的值都绑定ref，这样我们就能从ref中直接获取该值。

例如：

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <title>Vue app</title>
</head>

<body>
    <div id="vue-app">
        <input type="text" ref="name" @click="getName">
        <p>{{ name }}</p>
        <input type="text" ref="age" @click="getAge">
        <p>{{ age }}</p>
    </div>
    <script src="app.js"></script>
</body>

</html>
```

编写相应的js:

```js
new Vue({
    el: "#vue-app",
    data() {
        return {
            name: '',
            age: 30,
        };
    },
    methods: {
        getName() {
            this.name = this.$refs.name.value;
        },
        getAge() {
            this.age = this.$refs.age.value;
        }
    }
});
```
当在浏览器中输入完成后，里面的内容便会提交给相对应的属性，但是如果使用的是 “@click” ，那么需要修改之后再点击才会触发对应的方法。


