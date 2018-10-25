(function() {
    var balanceVue = new Vue({
      el: '#balanceVue',
      data: {
        title: null,
        description: null,
        notes: []
      },
      created: function() {
        var self = this;
        axios.get('http://localhost:3300/balance')
      },
      methods: {
        back: function() {
          axios.get('/')
        }
      }
    });
    //console.log(balanceVue);
  })();