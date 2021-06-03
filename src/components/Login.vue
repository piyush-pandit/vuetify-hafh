<template>
    <div>
        <v-toolbar>
            <v-spacer />
            <v-toolbar-title> Login </v-toolbar-title>
            <v-spacer />
        </v-toolbar>

        <v-content class="content">
            <v-card>
                <h2 style="padding-top:20px"> Home <span style="color:#ffab01"> Away From </span> Home</h2> 
                <v-spacer />
            <v-card-text>
                <v-form v-model="valid">
                    <v-text-field
                    label="E-mail"
                    v-model="email"
                    :rules="emailRules"
                    placeholder="Enter your email "
                    type="email"
                    ></v-text-field>

                    <v-text-field
                    label="Passwords"
                    placeholder="Enter your Passwords"
                    type="password"
                    ></v-text-field>

                    <div class="text-center">
                        <v-btn
                        rounded
                        color="#ffab01"
                        dark
                        block
                        >
                        Sign In
                        </v-btn>
                    </div>
                    
                    <p style="padding-top:20px ; margin-right:20%">
                    Dont have an account?
                    <a href="/signup">
                        <span style="color:#ffab01">Signup here !</span></a>
                    </p>
                </v-form>
            </v-card-text>
            </v-card>
        </v-content>
    </div>
</template>


<script>
export default {
  name: 'Login',
  data: () => ({
        valid: false,
        name: '',
        nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters'
        ],
        email: '',
        emailRules: [ 
        v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
    })
}
</script>



<style scoped>

.content{
    margin: 80px 15px 0px 15px;
}
</style>