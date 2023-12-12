const { createApp } = Vue;

createApp({
    data() {
        return {
            email: 'ssss',
           
        }
    },

    methods: {
        getNewEmail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                (response) =>{
                console.log(response);
                this.number = response.data.response;
            });
           
        }
    },

    created() {
        this.getNewEmail();
    },
}).mount('#app');
