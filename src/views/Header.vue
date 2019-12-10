<template>
<v-toolbar fixed class="cyan"  dark>
    <v-toolbar-title class="mr-4">
        <span class="home"
          @click="navigateTo({to:'root'})">
        TabTracker
        </span>
    </v-toolbar-title>

    <v-toolbar-items>
        <v-btn flat>
            Browser
        </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn flat dark
        @click="navigateTo({to:'login'})">
        Login
        </v-btn>
    </v-toolbar-items>
    <v-toolbar-items>
        <v-btn flat dark
        @click="navigateTo({to:'register'})">
        Sign up
        </v-btn>
    </v-toolbar-items>
</v-toolbar>
</template>
<style scoped>
.home{
    cursor: pointer;
}
.home:hover{
    color:#e9e;
}
</style>
<script>
export default{
    methods:{
        navigateTo(route){
            this.$router.push(route)

        }
    }
}
</script>