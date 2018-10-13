<template>
  <div id="app">

    <!-- Header Menu -->
    <el-menu class="headerMenu" v-if="$store.state.showHeader" :default-active="selectedTab" mode="horizontal" @select="onGoToPage">
      <el-menu-item index="1" disabled class="logoDiv">
        <img id="logo" src="/static/img/logo.png" />
      </el-menu-item>
      <el-menu-item index="Feed">
        Feed
      </el-menu-item>
        <el-menu-item index="Pofile">
        Profile
      </el-menu-item>


      <!-- Rightside profile & logout -->
          <el-button  index="" style="margin: 10px 20px 2px 0px; float: right;" @click="onLogout">Logout</el-button>

    </el-menu>

    <!-- Indiviaual PAge -->
    <transition name="fade">
      <router-view></router-view>
    </transition>

    <!-- Footer -->
    <div id="pageFooter">

    </div>

  </div>
</template>

<script>
  import { logout } from "./services/auth.js"
  export default {
    name: "app",
    data() {
      return {
        selectedTab: 'Profile',
        myRouteTargetString: '/user/profile',
        showFullScreenLoader: false
      };
    },
    computed: {
    },
    methods: {
      onGoToPage(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push({
          name: key
        });
      },

      onLogout(event) {
        logout()
          .then(result => {
            if (result.data.success) {
              this.onGoToPage('Login');
              this.$store.dispatch("clearLoginInfo", null);
            }
          })
          .catch(error => {
            console.log("logout error", error);
          });

      },

     

      setSelectedTab() {
        if (location.pathname.startsWith('/feed')) {
          this.selectedTab = 'Feed';
        } else if (location.pathname.startsWith('/user/profile')) {
          this.selectedTab = 'Profile';
        }
      }
    },

    //Route Change handling
    watch: {
      $route(to, from) {
        this.setSelectedTab();
      },
    },
    created: function () {
    }
  };
</script>

<style lang="scss">
  @font-face {
    font-family: 'Apercu Pro';
    src: url('/static/fonts/ApercuPro-Bold.eot');
    src: url('/static/fonts/ApercuPro-Bold.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/ApercuPro-Bold.woff2') format('woff2'),
    url('/static/fonts/ApercuPro-Bold.woff') format('woff'),
    url('/static/fonts/ApercuPro-Bold.ttf') format('truetype'),
    url('/static/fonts/ApercuPro-Bold.svg#ApercuPro-Bold') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu Pro';
    src: url('/static/fonts/ApercuPro-MediumItalic.eot');
    src: url('/static/fonts/ApercuPro-MediumItalic.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/ApercuPro-MediumItalic.woff2') format('woff2'),
    url('/static/fonts/ApercuPro-MediumItalic.woff') format('woff'),
    url('/static/fonts/ApercuPro-MediumItalic.ttf') format('truetype'),
    url('/static/fonts/ApercuPro-MediumItalic.svg#ApercuPro-MediumItalic') format('svg');
    font-weight: 500;
    font-style: italic;
  }

  @font-face {
    font-family: 'Apercu Pro';
    src: url('/static/fonts/ApercuPro.eot');
    src: url('/static/fonts/ApercuPro.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/ApercuPro.woff2') format('woff2'),
    url('/static/fonts/ApercuPro.woff') format('woff'),
    url('/static/fonts/ApercuPro.ttf') format('truetype'),
    url('/static/fonts/ApercuPro.svg#ApercuPro') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu Pro Mono';
    src: url('/static/fonts/ApercuPro-Mono.eot');
    src: url('/static/fonts/ApercuPro-Mono.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/ApercuPro-Mono.woff2') format('woff2'),
    url('/static/fonts/ApercuPro-Mono.woff') format('woff'),
    url('/static/fonts/ApercuPro-Mono.ttf') format('truetype'),
    url('/static/fonts/ApercuPro-Mono.svg#ApercuPro-Mono') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu Pro';
    src: url('/static/fonts/ApercuPro-Medium.eot');
    src: url('/static/fonts/ApercuPro-Medium.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/ApercuPro-Medium.woff2') format('woff2'),
    url('/static/fonts/ApercuPro-Medium.woff') format('woff'),
    url('/static/fonts/ApercuPro-Medium.ttf') format('truetype'),
    url('/static/fonts/ApercuPro-Medium.svg#ApercuPro-Medium') format('svg');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Apercu Pro';
    src: url('/static/fonts/ApercuPro-Italic.eot');
    src: url('/static/fonts/ApercuPro-Italic.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/ApercuPro-Italic.woff2') format('woff2'),
    url('/static/fonts/ApercuPro-Italic.woff') format('woff'),
    url('/static/fonts/ApercuPro-Italic.ttf') format('truetype'),
    url('/static/fonts/ApercuPro-Italic.svg#ApercuPro-Italic') format('svg');
    font-weight: normal;
    font-style: italic;
  }

  @font-face {
    font-family: 'Apercu Pro';
    src: url('/static/fonts/ApercuPro-BoldItalic.eot');
    src: url('/static/fonts/ApercuPro-BoldItalic.eot?#iefix') format('embedded-opentype'),
    url('/static/fonts/ApercuPro-BoldItalic.woff2') format('woff2'),
    url('/static/fonts/ApercuPro-BoldItalic.woff') format('woff'),
    url('/static/fonts/ApercuPro-BoldItalic.ttf') format('truetype'),
    url('/static/fonts/ApercuPro-BoldItalic.svg#ApercuPro-BoldItalic') format('svg');
    font-weight: bold;
    font-style: italic;
  }

  body {
    padding: 0px;
    margin: 0px;
    background: #e8edf2;
    line-height: normal;
    color: #1a1a1a;
    font-family: 'Apercu Pro';
    overflow: auto;

    .datepickerInFilter {

      .el-range-editor--mini.el-input__inner {
        padding-top: 3px;
        margin-right: 10px;
        height: 28px !important;
      }
      .el-date-editor {
        width: 350px !important;
      }

      .el-date-editor .el-range-input {
        width: 49%;
      }

      .el-range__close-icon {
        display: none !important;
      }
    }
  }

  .headerMenu {

    .logoDiv {
      opacity: 1 !important;
      cursor: default !important;

      #logo {
        height: 38px;
        width: 170px;
        margin-top: 3px;
        margin-right: 30px;
        padding-bottom: 8px;
      }
    }

  }


  #pageFooter {
    background: #000000e3;
    color: white;
    text-align: justify;
    .contact_details,
    .about_us {
      padding: 50px;
    }
    .about_text {
      color: #ffffffd1;
      line-height: 30px;
    }
  }


  .pagination {
    background: white;
    padding: 5px;
    margin-top: 5px;
    margin-bottom: 5px;

    .totalCount {
      /* border: 1px solid blue; */
      width: 200px;
      padding-top: 8px;
      padding-left: 20px;
      font-weight: bold;
      color: '#555';
      font-size: 14px;
    }

    .el-pagination {
      width: 100%;
      text-align: right;
      float: right;
      /* border: 1px solid red; */
    }
  }

  button {
    outline: none !important;
  }


  /**************** Fade animation styles *****************/

  .fade-enter-active,
  .fade-leave-active {
    transition-property: opacity;
    transition-duration: 0.25s;
  }

  .fade-enter-active {
    transition-delay: 0.25s;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>