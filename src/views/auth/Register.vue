<template>
<div>
    <input type="text" placeholder="email">
    <input type="password" placeholder="password">
    <button>Register</button>
</div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService';
export default{
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
       async Register(){
            const response = await AuthenticationService.register({
            email:this.email,
            password:thispassword
        })
       }
    }
}
</script>