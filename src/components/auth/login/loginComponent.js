import router from "../../../router";
import { authenticateUser } from "../../../services/auth";

export default {
    name: "login",
    data() {
        return {
            companyCode: '',
            email: '',
            password: '',
            errorMsg: '',
        };
    },
    methods: {

        onLoginSubmit(event) {
            this.errorMsg = '';
            // console.log(this.companyCode)
            var params = {
                email: this.email,
                password: this.password
            };

            event.preventDefault();
            authenticateUser(params).then((result) => {
                if (result.data.success) {

                    this.$store.dispatch("setLoginStatus", true);
                    // console.log(result.data.userInfo)
                    this.$store.dispatch("setUserInfo", {
                        "userId": result.data.data.id,
                        "first_name": result.data.data.firstName,
                        "last_name": result.data.data.lastName,
                        "email": result.data.data.email
                    });
                    router.push({ name: 'Feed' });

                } else {
                    //Show invalid error message
                    this.errorMsg = result.data.message;
                }
            }).catch((error) => {
                //Internal error
                this.errorMsg = "Internal Error.";
            });

        },
    }
};