new Vue({
    el: "#vue-app",
    data() {
        return {
            age: 30,
            x: 0,
            y: 0,
            name: '米斯特五',
        };
    },
    methods: {
        addAge(time) {
            this.age += time;
        },
        subAge(time) {
            this.age -= time;
        },
        updateXY(event) {
            // console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        handClick() {
            alert('hello');
        },
        enterName() {
            console.log("正在输入姓名。。。。");
        },
        enterAge() {
            console.log("正在输入年龄。。。。");
        }
    }
});