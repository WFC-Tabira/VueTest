<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html, body {
    font-family: 'Noto Serif JP', serif;
    background-color: #ffffff;
    margin: 5px;
    padding: 0;
    color: #808080;
}
.wrapper {
    width: 90%;
    background: #ccc;
}
ul {
    list-style: none;
}
header {
    font-size: 25;
    padding-top: 50px;
    padding-bottom: 10px;
    text-align: center;
}
main {
    padding: 50px 10px;
    text-align: center;

}
footer {
    /**/
}
form {
    margin: 0 auto;
    width: 400px;
    background-color: #eeeeee;
    padding: 50px 50px 10px 50px;
    margin-bottom: 25px;
    border-radius: 5px;
}
form li {
    font-size: 10;
    color: #FF0000;
    padding: 0px;
}
input {
    border-radius: 5px;
}
.newAccount p a {
    margin: 0px;
}
</style>