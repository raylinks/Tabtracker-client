<template>
<v-layout column>
    <v-flex xs6 offset-xs3>
        <div class="white-elevation-2">
            <v-toolbar flat dense class="cyan" dark >
            <v-toolbar-title >Register</v-toolbar-title>
            </v-toolbar>
            <div class="pl-4 pr-4 pt-2 pb-2">
                <form
                    name="tab-tracker-form">
                <v-text-field
                label="email"
                v-model="email"
                ></v-text-field>
             <v-text-field
                label="password"
                type="password"
                v-model="password"
                ></v-text-field>
                </form>
            <div class="error" v-html="error">
    <v-btn>Register</v-btn>
            </div>
            </div>
        </div>
    </v-flex>
</v-layout>

</template>
<script>
import AuthenticationService from '@/services/AuthenticationService';
export default{
    data(){
        return{
            email:'',
            password:'',
            error: null
        }
    },
    methods:{
       async Register(){
           try{
            const response = await AuthenticationService.register({
            email:this.email,
            password:this.password
        })
           }catch(error){
               this.eror = error.response.data.error

           }
       }
    }
}
</script>
<style scoped>
.error{
    color:red;
}
.input-group--text-field input{
    border-bottom:1px solid black;
}
</style>