<template>
  <div>
      <v-card>
        <v-img
          style="border-radius: 0px 0px 30px 30px;"
          src="https://sc02.alicdn.com/kf/H14b210d2f37942ea86a6ef2fc81cdc61Y/226479103/H14b210d2f37942ea86a6ef2fc81cdc61Y.png"
        >
        <!-- <v-card-title><v-icon>mdi-arrow-left</v-icon>Kitchen</v-card-title> -->
        
          <v-fab-transition>
              <v-btn
                class="btn"
                style="color:white"
                top
                left
                fixed
                small
                light
                href="/room"
              >
                <v-icon
                  dark
                  left
                >
                  mdi-arrow-left
                </v-icon> Kitchen
              </v-btn>
          </v-fab-transition>
        </v-img>
        <v-card-title><strong>Your List</strong></v-card-title>

        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"></v-img>
          </v-list-item-avatar>

          <div style="margin-left: 10px">
          <v-list-item-title class="text-h6">Chintan Shah</v-list-item-title>
          <v-list-item-subtitle>28/05/2021</v-list-item-subtitle>
          </div>
          <v-spacer />
          <v-btn 
            outlined
            rounded
            color="#ffab01"
            dark
            small
          >
          Add to Old
          </v-btn>
        </v-list-item>

        <div>
        <v-img
          style="border-radius: 20px; margin:5px"
          src="https://learn.compactappliance.com/wp-content/uploads/2017/12/steamed-broccoli.jpg"
        >
        </v-img>
        <p style="margin-right:60%">Buy Broccoli</p><br/>
        <p class="line"><span>Old</span></p>
        </div>

        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"></v-img>
          </v-list-item-avatar>

          <div style="margin-left: 10px">
          <v-list-item-title class="text-h6">Chintan Shah</v-list-item-title>
          <v-list-item-subtitle>28/05/2021</v-list-item-subtitle>
          </div>
        </v-list-item>

        <div>
        <v-img
          style="border-radius: 20px; margin:5px"
          src="http://images2.fanpop.com/images/photos/5400000/Random-Food-random-5409310-1280-800.jpg"
        >
        </v-img>
        </div>

        <div>
          <v-card-text >
            <v-fab-transition >
              <v-btn
                color="#ffab01"
                dark
                right
                fab
                fixed 
                bottom
                href="/postmodal"
              >
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <!-- <v-subtitle>New Post</v-subtitle> -->
            </v-fab-transition>
          </v-card-text>
        </div>

      </v-card>
  </div>
</template>


<script>
export default {
  name: 'Post',
  data () {
    return {}
  }
}
</script>



<style scoped>

.line {
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #abb7b7;
  line-height: 0.1em;
  margin: 10px 0 20px;
  color:#abb7b7
}

.line span {
  background: #fff;
  padding: 0 10px;
}

.btn{
  width:120px; 
  margin: 10px 0px 0px -30px ; 
  text-transform: capitalize;
  background: linear-gradient(to right, #1e1f1f 63%, #f6eef1 98%); 
}

</style>