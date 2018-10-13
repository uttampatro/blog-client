import Vue from 'vue'
import Router from 'vue-router'

// Login
const LoginPage = resolve => {
    require.ensure(['./components/auth/login/login'], () => {
        resolve(require('./components/auth/login/login'));
    });
};

// Register
const RegisterPage = resolve => {
    require.ensure(['./components/auth/register/register'], () => {
        resolve(require('./components/auth/register/register'));
    });
};

// Forget Password
const ForgetPassword = resolve => {
    require.ensure(['./components/auth/forgetPass/forgetPass'], () => {
        resolve(require('./components/auth/forgetPass/forgetPass'));
    });
};

// User Profile 
const ProfileDetails = resolve => {
    require.ensure(['./components/profile/profile'], () => {
        resolve(require('./components/profile/profile'));
    });
};

// User Profile 
const FeedPage = resolve => {
    require.ensure(['./components/feed/feed'], () => {
        resolve(require('./components/feed/feed'));
    });
};


/*********************  End: Auth *********************/


Vue.use(Router);


export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [

        //Auth routes
        { path: '/login', name: 'Login', component: LoginPage },
        { path: '/register', name: 'Register', component: RegisterPage },
        { path: '/forgetPass', name: 'ForgetPassword', component: ForgetPassword },

        // User routes
        { path: '/user/detail', name: 'Profile', component: ProfileDetails },

        // feed page
        { path: '/feed', name: 'Feed', component: FeedPage },

    ]
});