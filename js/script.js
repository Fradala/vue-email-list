const { createApp } = Vue;

createApp({
    data() {
        return {
            email: '',
            array: [],
           
        }
    },

    methods: {
        getNewEmail(){
          for (let i = 0; i < 10; i ++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
                (response) =>{
                console.log(response);
                this.array.push = response.data.response;
            });
          }
           
        }
    },

    created() {
        this.getNewEmail();
    },
}).mount('#app');
