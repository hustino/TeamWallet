(function() {
    var indexVue = new Vue({
      el: '#indexVue',
      data: {
        title: null,
        description: null,
        notes: []
      },
      created: function() {
        var self = this;
        axios.get('/home')
      }
     
    });
    //console.log(indexVue);
  })();