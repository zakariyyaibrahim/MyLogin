new Vue({
  el: "#myApp",
  data:{
    Username:'',
    password: '',
    showPassword: '',
    showEmail: '',
    Display :''
  },
  methods: {
    DisplayUser() {
      this.showEmail = this.Username;
      this.showPassword = this.password;
      this.Display = 'The Username you entered  is ' + this.showEmail + ' and your password is ' + this.showPassword;

    }
  }
});
