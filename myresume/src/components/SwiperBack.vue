<template>
  <div class="slide">
      <div class="slideshow">
        <transition-group tag="ul" name="image">
            <li v-for="(img,  index)  in  imgArray"  v-show="index === mark"  :key="index">
                <a href="#">
                    <img :src='img'>
                </a>
            </li>
        </transition-group>
        
      </div>
       <div  class="bar">
           <span v-for="(item, index) in imgArray"  :key="index"></span>
       </div>
    </div>


</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<script>
export default {
  name: "background",
  mounted() { 
         this.play()

  },

  data() {
    return {
        imgArray: [     
            "../assets/1.jpg", 
            "../assets/2.jpg", 
            "../assets/3.jpg"
        ],
      message: "你好，我是王蒙",
      mark: 0
    };
  },
created(){
 
},
  methods: {

         autoPlay() {
             this.mark++;
             if (this.mark === 2) {
                 this.mark = 0;
             }
         },
         play(){
             setInterval(this.autoPlay, 2500)
         }
     ,

       change(i) {
           this.mark = i;
       },   
     
  },

};
</script>

<style scoped>

.container {
    height: 950px;
    position: relative;
}
.imgbox {
    max-width: 1990px;
     position: absolute;
     left: 0l;
     right: 0;
     margin: auto
  
    
  
}
.imgbox img { 
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}


</style>
