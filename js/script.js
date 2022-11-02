const {createApp}= Vue;

createApp({
    data(){
        return{
            msg:"Hello World!",
            red:"sc-red",
            srcDoggo1: "doggo.jpg",
            toggle: true,
        }
    },
    methods:{
            switchToggle(){
                this.toggle = !(this.toggle);
            }
        }
}).mount("#app")