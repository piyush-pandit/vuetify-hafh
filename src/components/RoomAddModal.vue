<template>
    <div id="app">
        <v-app id="inspire">
            <v-card flat>
            <v-container fluid>
                <div>
                    <v-toolbar>
                    <v-btn
                        icon
                        href=""
                    >
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
        
                    <v-toolbar-title> Add Room/Area </v-toolbar-title>
        
                    </v-toolbar>
                </div>
            </v-container>
            </v-card>
            <br/>
            <v-form>
                <p class="para">Name Of Room/Area</p>
                <v-text-field 
                placeholder="Enter your Room" 
                solo-inverted
                style="margin: 0px 20px 0px 20px "
                >
                </v-text-field>

                <p class="para-title">Add an image</p>
                <v-file-input 
                placeholder="Browse file" 
                solo-inverted
                prepend-icon="mdi-camera" 
                style="margin: 0px 15px 0px 15px "
                >
                </v-file-input>
            </v-form>
            <br/>
            <div class="text-center">
                <v-btn
                style="width: 120px"
                rounded
                color="#ffab01"
                dark
                >
                Add Room
                </v-btn>
            </div>
        </v-app>
    </div>
</template>

<script>


export default {
    name:' RvAddModal',
}
</script>

<style scoped>

.para-title{
    margin-right:60%;
}

.para{
    margin-right:50%
}
/* .v-btn {
  width: 100px;
} */
</style>

