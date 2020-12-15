let start = new Vue ({
  el: '#go',
  data: {
    counter: 0,
    photos: [
      "https://images.all-free-download.com/images/graphicthumb/highdefinition_picture_of_the_winter_landscape_6_166138.jpg",
      "https://images.all-free-download.com/images/graphicthumb/beach_sunset_landscape_02_hd_pictures_166225.jpg",
      "https://images.all-free-download.com/images/graphicthumb/landscape_with_lake_185684.jpg",
      "https://images.all-free-download.com/images/graphicthumb/moonlight_landscape_192351.jpg",
    ],
  },
  methods : {
    next(){
      this.counter++;
      if(this.counter > this.photos.length - 1) {
        this.counter = 0;
      }
    },
    prev(){
      this.counter--;
      if(this.counter < 0) {
        this.counter = this.photos.length -1;
      }
    }
  }
});
