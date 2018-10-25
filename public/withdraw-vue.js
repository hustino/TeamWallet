(function() {
    var withdrawVue = new Vue({
      el: '#withdrawVue',
      data: {
        user: []
      },
      created: function() {
        var self = this;
        axios.get('http://localhost:3300/withdraw')
      },
      // methods: {
      //   back: function() {
      //     axios.get('/')
      //   }
      // }
    });
    //console.log(withdrawVue);
  })();