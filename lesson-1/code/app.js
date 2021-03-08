new Vue({
    el: "#vue-app",
    data() {
        return {
            boy: "哪吒",
            name: "孙悟空",
            phone: 123456,
            website: 'https://www.baidu.com',
            websiteTag: '<a href="https://www.taobao.com">taobao<a>',
        };
    },
    methods: {
        greet(time, num) {
            boy = "哪吒"
            return `good ${time} ${this.name} ${boy} ${num}`
        },
        haveLunch() {
            return `Have eatting lunch!`;
        },
        haveDinner: function () {
            return `Have eatting dinner`
        },
    }
});