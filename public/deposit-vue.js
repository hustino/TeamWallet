(function() {
    var depositVue = new Vue({
      el: '#depositVue',
      data: {
        title: null,
        description: null,
        notes: []
      },
      created: function() {
        var self = this;
        axios.get('http://localhost:3300/deposit')
      },
      methods: {
        back: function() {
          axios.get('/')
        }
      }
    });
   // console.log(depositVue);
  })();