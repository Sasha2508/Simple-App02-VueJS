const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Keep Learning Vue',
            courseGoalB: 'You are one step closer, good job',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');

