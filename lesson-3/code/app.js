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
            // console.log(this.$refs.name.value);
            this.name = this.$refs.name.value;
        },
        getAge() {
            // console.log(this.$refs);
            this.age = this.$refs.age.value;
        }
    }
});