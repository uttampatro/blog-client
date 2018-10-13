<template>
  <div id="registerPage" class="row">
    <div id="registerBox" class="row">


      <!-- LOGIN DIV -->
      <div class="col-md-5 col-sm-12 col-xs-12  registerContainer">


        <!-- Register Header -->
        <div class="registerHeader">Create New Account</div>
        <div v-if="successMsg != ''" class="successDiv">
          {{successMsg}}
        </div>

        <div v-if="errorMsg != ''" class="errorDiv">
          {{errorMsg}}
        </div>


        <!-- Register Form -->
        <b-form class="registerForm" @submit="onRegisterSubmit">
          <div class="flex" style="display: flex">
            <b-form-group id="nameInputGroup" label="First Name" label-for="nameInput">
              <el-input id="nameInput" size="small" type="text" v-model="first_name" required></el-input>
            </b-form-group>
            <b-form-group id="nameInputGroup" label="Last Name" label-for="nameInput" style="padding-left: 10px">
              <el-input id="nameInput" size="small" type="text" v-model="last_name" required></el-input>
            </b-form-group>
          </div>

          <b-form-group id="emailInputGroup" label="Email Id" label-for="emailInput">
            <el-input id="emailInput" size="small" type="text" v-model="email" required></el-input>
          </b-form-group>
          <b-form-group id="mobileInputGroup" label="Mobile Number(10 digits)" label-for="mobileInput">
            <el-input id="mobileInput" size="small" type="text" v-model="mobile" required></el-input>
          </b-form-group>
          <b-form-group id="passwordInputGroup" label="Password" label-for="passwordInput">
            <el-input id="passwordInput" size="small" type="password" v-model="password" required></el-input>
          </b-form-group>
          <div class="buttonContainer">
            <b-button type="submit" variant="primary" class="el-button el-button--primary submitBtn">Register</b-button>
            <el-button @click="$router.push({ name: 'Login' });">Login</el-button>
          </div>
        </b-form>

      </div>

    </div>
  </div>
</template>
<script>
  import RegisterComponent from "./registerComponent";
  export default RegisterComponent;
</script>

<style lang="scss">
  #registerPage {
    background-size: cover;
    min-height: 100vh;

    #registerBox {
      width: 30%;
      min-height: 70vh;
      margin: auto;
      margin-top: 5vh;
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
          padding-top: 25px;
        }

        .bannerImg {
          width: 100%;
          padding: 20px;
        }

        .points {
          color: #777;
          font-size: 12px;
          text-align: left;
          line-height: 30px;
        }

      }

      .registerContainer {
        min-width: 100%;
        padding-top: 0px;
        padding-top: 20px;
        padding-bottom: 20px;
        border-left: 1px dashed #eee;
        .logoContainer {
          text-align: center;
          width: 100%;
          margin-top: 20px;
          font-size: 40px;
          .logoIcon {
            height: 50px;
          }
        }

        .registerHeader {
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

        .registerForm {
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
            padding-top: 0px;
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