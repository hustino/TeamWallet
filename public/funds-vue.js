(function() {
    var fundsVue = new Vue({
      el: '#fundsVue',
      data: {
        title: null,
        description: null,
        notes: []
      },
      created: function() {
        var self = this;
        axios.get('http://localhost:3300/funds')
      },
      methods: {
        back: function() {
          axios.get('/')
        }
      }
    });
    //console.log(fundsVue);
  })();