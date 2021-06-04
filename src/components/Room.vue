<template>
    <div>
        <v-card
            class="mx-auto"
            height="100px"
        >
            <v-img
            class ="main"
            height="200px"
            src="http://d2u4q3iydaupsp.cloudfront.net/M9YO50StNO9wcaIKVYLMIAVeaOrWxAHoEXoIO0K1D9hMa6RlXDkuExDgDwGnn1NTP70WO5k6SoYUhqA2jEzvSp5Fj0jmHNjAWq11rOt0OA59j6pLWSEK6jEWMrGxtiG2"
            >
              <v-fab-transition>
              <v-btn
                class="btn"
                style="color:white"
                top
                left
                fixed
                small
                light
                href="/rv"
              >
                <v-icon
                  dark
                  left
                >
                  mdi-arrow-left
                </v-icon> My Rv
              </v-btn>
              </v-fab-transition>
          
            </v-img>

            <v-list style="padding-top:30px" >
            <template v-for="(item) in items">

                <v-list-item
                :key="item.title"
                
                >
                <v-list-item-avatar>
                    <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content style="text-align:left ; margin-left: 15px;">
                    <strong><v-list-item-title ><a href='/post'>{{item.title}}</a></v-list-item-title></strong>
                </v-list-item-content>
                </v-list-item>
            </template>
            </v-list>

          <div>
            <v-fab-transition >
              <v-btn
                color="#ffab01"
                dark
                right
                fab
                fixed 
                bottom
                href="/roommodal"
              >
                <v-icon style="color:white">mdi-plus</v-icon>
              </v-btn>
            </v-fab-transition>
          
          </div>
        </v-card>
    </div>
</template>


<script>
export default {
  name: 'Room',
  data: () => ({
      items:[
        {
          avatar: 'https://essblog.wpengine.com/wp-content/uploads/2020/05/rv-renovation-ideas.jpg',
          title: 'Bedroom',
        },

        {
          avatar: 'https://koa.com/blog/images/2017-Airstream-Flying-Cloud.jpg?preset=blogPhoto',
          title: 'Kitchen',
        },

        {
          avatar: 'https://kiowacountypress.net/sites/default/files/field/image/cost-effective_rv_maintenance_tips.jpg',
          title: 'Rv Maintainance',
        },
      ]
  })
}
</script>



<style scoped>

.main {
  border-radius: 0px 0px 20px 20px;
}

a:link {
  color: black;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color:black;
  background-color: transparent;
  text-decoration: none;
}


a:active {
  color: green;
  background-color: transparent;
}

.btn{
  width:120px; 
  margin: 10px 0px 0px -30px ; 
  text-transform: capitalize;
  background: linear-gradient(to right, #1e1f1f 63%, #f6eef1 98%); 
}


</style>