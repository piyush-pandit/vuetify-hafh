<template>
    <div id="app">
        <v-app id="inspire">
            <v-card flat>
            <v-container fluid>
                <div>
                    <v-toolbar>
                    <v-btn
                        icon
                        href="/rv"
                    >
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
        
                    <v-toolbar-title> Add an Rv </v-toolbar-title>
        
                    </v-toolbar>
                </div>
            </v-container>
            </v-card>
            <br/>
            <v-form>
                <p class="para-title">Name of Rv</p>
                <v-text-field 
                placeholder="Family Rv" 
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

            <div class="text-center">
                <v-btn
                outlined
                rounded
                color="#ffab01"
                dark
                >
                <v-icon style="padding-right:5px"> mdi-share </v-icon>
                Share with people
                </v-btn>
            </div>
            <br/>

            <div class="text-center">
                <v-btn
                style="width: 100px"
                rounded
                color="#ffab01"
                dark
                >
                Add Rv
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
/* .v-btn {
  width: 100px;
} */
</style>
