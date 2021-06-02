document.addEventListener("DOMContentLoaded", function () {

    Vue.component('v-select', VueSelect.VueSelect)
    var filter = new Vue({
        el: '#filter',
        data: {
            filterVal: null,
            options: [
                {slug: 'price', value: 'Покупка вина'},
                {slug: 'tastings', value: 'Дегустации'},
                {slug: 'excursions', value: 'Экскурсии'},
                {slug: 'events', value: 'Мероприятия'},
                {slug: 'hotel', value: 'Отель'},
                {slug: 'restaurant', value: 'Ресторан'},
            ],
            restaurantsList: [
                {
                    placeName: 'Arizona',
                    data: [
                        {slug: 'excursions', value: 'Экскурсии'},
                        {slug: 'events', value: 'Мероприятия'},
                        {slug: 'hotel', value: 'Отель'},
                    ]
                },
                {
                    placeName: 'Confetti',
                    data: [
                        {slug: 'price', value: 'Покупка вина'},
                    ]
                },
                {
                    placeName: 'Creme',
                    data: [
                        {slug: 'hotel', value: 'Отель'},
                        {slug: 'restaurant', value: 'Ресторан'},
                    ]
                },
                {
                    placeName: 'Le Grand',
                    data: [
                        {slug: 'tastings', value: 'Дегустации'},
                        {slug: 'excursions', value: 'Экскурсии'},
                        {slug: 'hotel', value: 'Отель'},
                        {slug: 'restaurant', value: 'Ресторан'},
                    ]
                },
                {
                    placeName: 'Forest Beer',
                    data: [
                        {slug: 'events', value: 'Мероприятия'},
                        {slug: 'hotel', value: 'Отель'},
                        {slug: 'restaurant', value: 'Ресторан'},
                    ]
                },
            ]
        },
        methods: {
            filterChange() {

                this.restaurantsList.forEach((el,i)=>{
                    const selectedFilter =  el.data.filter(item => item.slug === this.filterVal)
                    if(selectedFilter.length){
                        this.restaurantsList.splice(0,0,this.restaurantsList.splice(i,1)[0])
                    }
                })



                // console.log(document.querySelectorAll('[data-service="`${this.filterVal}`"]'))

                // switch (this.filterVal) {
                //     case 'price':
                //
                //         break
                //     case 'tastings':
                //         break
                //     case 'excursions':
                //         break
                //     case 'events':
                //         break
                //     case 'hotel':
                //         break
                //     case 'restaurant':
                //         break
                //
                // }
            }
        }
    })

});

