(function(){

    var loginVue = new Vue({
        el: '#loginVue',
        data:{
        name: null,
        acct_no: null,
        PIN: null,
        log: null,
        users : []
        },
        created: function() {
            var self = this;
            axios.get('/')

        },
        methods: {
            login: function() {
              redirect('/home')
            }
          }
    })

})