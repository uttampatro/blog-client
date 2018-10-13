<template>
  <div id="loginPage" class="row">
    <div id="loginBox" class="row">
  
  
      <!-- LOGIN DIV -->
      <div class="col-md-5 col-sm-12 col-xs-12  loginContainer">
  
        <!-- Header -->
        <div class="loginHeader">Login</div>
  
        <div v-if="errorMsg != ''" class="errorDiv">
          {{errorMsg}}
        </div>
  
        <!-- Login Form -->
        <b-form class="loginForm" @submit="onLoginSubmit">
          <b-form-group id="emailInputGroup" label="Email" label-for="emailInput">
            <el-input id="emailInput" type="email" v-model="email" required></el-input>
          </b-form-group>
          <b-form-group id="passwordInputGroup" label-for="passwordInput">
            <div style="font-size: 13px;color:#777 ">
              Password
            <div style="font-size: 10px;padding:10px 0px 0px 0px'; font-family: sans-serif; " class="float-right">
              <router-link to="/forgetPass">
                <a>Forgot password?</a>
              </router-link>
            </div>
            </div>
            <el-input id="passwordInput" type="password" v-model="password" required></el-input>
          </b-form-group>
          <div class="buttonContainer">
            <b-button type="submit" variant="primary" class="el-button el-button--primary submitBtn">Login</b-button>
            <el-button @click="$router.push({ name: 'Register' });">Register</el-button>
          </div>
  
        </b-form>
  
      </div>
  
    </div>
  </div>
</template>

<script>
  import LoginComponent from "./loginComponent";
  export default LoginComponent;
</script>

<style lang="scss">
  #loginPage {
    /* background: linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.57)), url(/static/img/login_bg.jpg); */
    background-size: cover;
    min-height: 100vh;
    min-width: 100vh;
    overflow-x: hidden;
    #loginBox {
      width: 30%;
      min-height: 70vh;
      margin: auto;
      // margin-top: 15vh;
      background: white;
      border-radius: 5px;
      .marketing {
        background-size: cover;
        border-radius: 5px 0px 0px 5px;
        padding: 20px;
        text-align: center;
        .header {
          font-size: 25px;
          color: #444;
        }
        .bannerImg {
          width: 80%;
          padding: 20px;
        }
        .points {
          color: #777;
          font-size: 12px;
          text-align: left;
          line-height: 30px;
        }
      }
      .loginContainer {
        min-width: 100%;
        padding-top: 80px;
        padding-bottom: 20px;
        border-left: 1px dashed #eee;
        .logoContainer {
          text-align: center;
          width: 100%;
          margin-top: 20px;
          font-size: 40px;
          .logoIcon {
            height: 60px;
          }
        }
        .loginHeader {
          font-size: 17px;
          text-align: center;
          margin-top: 10px;
          color: #555;
        }
        .errorDiv {
          padding-top: 20px;
          text-align: center;
          width: 100%;
          color: red;
        }
        .successDiv {
          padding-top: 20px;
          text-align: center;
          width: 100%;
          color: green;
        }
        .loginForm {
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 25px;
          .form-group {
            margin-bottom: 20px;
            label {
              color: #777;
              margin-bottom: -10px;
              font-size: 13px;
            }
          }
          .buttonContainer {
            text-align: center;
            padding-top: 10px;
            button {
              display: inline-block;
              width: 100px;
              font-weight: normal;
              text-align: center;
            }
          }
        }
      }
    }
  }
</style>