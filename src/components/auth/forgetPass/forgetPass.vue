<template>
  <div id="forgetPassPage" class="row">
    <div id="forgetPassBox" class="row">


      <!-- LOGIN DIV -->
      <div class="col-sm-12 col-xs-12  forgetPassContainer">

        <!-- Header -->
        <div v-if="this.$route.query.token" class="forgetPassHeader">Create New Password</div>
        <div v-else class="forgetPassHeader">Send Password Reset Link</div>

        <div v-if="errorMsg != ''" class="errorDiv">
          {{errorMsg}}
        </div>
        <div v-if="successMsg != ''" class="successDiv">
          {{successMsg}}
        </div>

        <!-- Create New Password Form -->
        <b-form v-if="this.$route.query.token" class="forgetPassForm" @submit="onCreateNewPassSubmit">
        <br />
          <b-form-group id="confirmPasswordInputGroup" label="New Password" label-for="confirmPasswordInput">
            <el-input id="confirmPasswordInput" type="password" v-model="newPass" required></el-input>
          </b-form-group>
          <b-form-group id="passwordInputGroup" label="Confirm Password" label-for="passwordInput">
            <el-input id="passwordInput" type="password" v-model="confirmPass" required></el-input>
          </b-form-group>
          <div class="buttonContainer">
            <b-button type="submit" variant="primary" class="el-button el-button--primary" style="width: 200px;">Generate Password</b-button>
          </div>
        </b-form>

        <!-- Company & Email Form -->
        <b-form v-else class="forgetPassForm" @submit="onEmailSubmit">
          <b-form-group id="emailInputGroup" label="Email" label-for="emailInput">
            <el-input id="emailInput" type="email" v-model="email" required></el-input>
          </b-form-group>
          <div class="buttonContainer">
            <b-button type="submit" variant="primary" class="el-button el-button--primary submitBtn">Send</b-button>
            <el-button @click="$router.push({ name: 'Login' });">Login</el-button>
          </div>
        </b-form>

      </div>

    </div>
  </div>
</template>
<script>
  import ForgetPassComponent from "./forgetPassComponent";
  export default ForgetPassComponent;
</script>

<style lang="scss">
  #forgetPassPage {
    /* background: linear-gradient(rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.57)), url(/static/img/forgetPass_bg.jpg); */
    background-size: cover;
    min-height: 100vh;
    overflow-x: hidden;
    
    #forgetPassBox {
      width: 30%;
      min-height: 60vh;
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

      .forgetPassContainer {
        min-width: 100%;
        padding-top: 90px;
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

        .forgetPassHeader {
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

        .forgetPassForm {
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 25px;

          .form-group {
            // margin-bottom: 20px;

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