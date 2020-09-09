<template>
                <form id="appForm" @submit="checkForm" action="/something" method="post">
                    <p v-if="errors.length">
                        <ul>
                            <li v-for="error in errors">{{ error }}</li>
                        </ul>
                    </p>
                    <p>
                        <label for="userid">ユーザーID：<label>
                        <input type="text" name="userid" id="userid" v-model="userid">
                    </p>
                    <p>
                        <label for="password">パスワード：<label>
                        <input type="password" name="password" id="password" v-model="password" min="0">
                    </p>
                    <p>
                        <input type="submit" value="ログイン">
                    </p>
                </form>
                <div id="forget">
                    <a href="/App">パスワードをお忘れですか？</a>
                </div>
                <div id="newAccount">
                    <p>アカウントをお持ちでない場合はこちらから。</p>
                    <a href="/home">アカウント作成</a>
                </div>
</template>

<script>
</script>

<style>
</style>