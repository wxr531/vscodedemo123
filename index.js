var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        isShow: false,
        pictureurl: "",
        picturename: "",
        picturename1: "",
    },
    methods: {
        changepicsrc: function () {
            //var url = "./"+ picturename;
            
            this.picturename = "001.jpg"
            this.pictureurl = "./"+ this.picturename;
            this.picturename1=this.picturename.split(".");
            console.log(this.picturename1[0])
            //alert("zuodaozheli");
            //this.message = this.message.split('').reverse().join('')
        },
        hiddenpicture: function(){
            this.isShow = !this.isShow;
        }
    }
})