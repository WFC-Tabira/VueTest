var pageTitle = new Vue({
    el: '#pageTitle',
    data: {
        message: 'ログイン'
    }
});

var appForm = new Vue({
  el:'#appForm',
  data:{
    errors:[],
    name:null,
    age:null,
    movie:null
  },
  methods:{
    checkForm:function(e) {
      if(this.userid && this.password) return true;
      this.errors = [];
      if(!this.userid) this.errors.push("ユーザーIDを入力してください。");
      if(!this.password) this.errors.push("パスワードを入力してください。");
      e.preventDefault();
    }
  }
});
export default pageTitle
export default appForm