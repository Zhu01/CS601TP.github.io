/*jshint esversion: 6 */
// js for vue
// Vue.component('modal', {
//     template: '#modal-component'
// });

new Vue({
    el: '#app',
    data() {
        return {
            image1: "assets/images/ty.jpg",
            image2: "assets/images/cookie.jpg",
            image3: "assets/images/maggie.jpg",
            image4: "assets/images/dd.jpg",
            image5: "assets/images/teen_ty.jpg",
            image6: "assets/images/teen_cookie.jpg",
            image7: "assets/images/teen_maggie.jpg",
            image8: "assets/images/teen_dd.jpg",
            bufferImage: null,
        };
    },
    methods: {
        getImgUrl(number) {
            if (number == 1) {
                return this.image1;
            } else if (number == 2) {
                return this.image2;
            } else if (number == 3) {
                return this.image3;
            } else if (number == 4) {
                return this.image4;
            }
        },
        hoverOver(number) {
            if (number == 1) {
                this.bufferImage = this.image1;
                this.image1 = this.image5;
            } else if (number == 2) {
                this.bufferImage = this.image2;
                this.image2 = this.image6;
            } else if (number == 3) {
                this.bufferImage = this.image3;
                this.image3 = this.image7;
            } else if (number == 4) {
                this.bufferImage = this.image4;
                this.image4 = this.image8;
            }
        }, hoverLeave(number) {
            if (number == 1) {
                this.image1 = this.bufferImage;
            } else if (number == 2) {
                this.image2 = this.bufferImage;
            } else if (number == 3) {
                this.image3 = this.bufferImage;
            } else if (number == 4) {
                this.image4 = this.bufferImage;
            }
        }
    }
});