<template>
                <form id="appForm" @submit="checkForm" action="/something" method="post">
                    <p v-if="errors.length">
                            <b>Please correct the following error(s):</b>
                        <ul>
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>
                    <p>
                        <label for="userid">ユーザーID：</label>
                        <input type="text" name="userid" id="userid" v-model="userid">
                    </p>
                    <p>
                        <label for="password">パスワード：</label>
                        <input type="password" name="password" id="password" v-model="password" min="0">
                    </p>
                    <p>
                        <input type="submit" value="ログイン">
                    </p>
                </form>
                <div id="forget">
                    <a href="/App">パスワードをお忘れですか？</a>
                </div>
                <!-- <div id="newAccount">
                    <p>アカウントをお持ちでない場合はこちらから。</p>
                    <a href="/home">アカウント作成</a>
                </div> -->
</template>

<script>
import messages from "@/messages.js";
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
</script>

<style>
</style>