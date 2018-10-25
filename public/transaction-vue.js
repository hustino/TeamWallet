(function() {
    var transactionVue = new Vue({
      el: '#transactionVue',
      data: {
        id: null,
        name: null,
        acct_no: null,
        balance: null,
        users: []
      },
      created: function() {
        var self = this;
        axios.get('/api/users')
        .then(function(res) {
          self.users = res.data;
        })
        .catch(function(err) {
          self.users = [];
        });
      }
    });
    console.log(transactionVue);
  })();