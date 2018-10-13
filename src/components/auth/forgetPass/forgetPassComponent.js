import router from "../../../router";
import { createNewPass, sendResetPassLink } from "../../../services/auth";

export default {
    name: "login",
    data() {
        return {
            companyCode: '',
            email: '',
            newPass: '',
            confirmPass: '',
            errorMsg: '',
            successMsg: ''
        };
    },
    methods: {

        onEmailSubmit(event) {
            this.errorMsg = '';
            this.successMsg = '';
            // console.log(this.companyCode)
            var params = {
                companyCode: this.companyCode,
                email: this.email
            };

            event.preventDefault();
            sendResetPassLink(params).then((result) => {
                if (result.data.success) {
                    this.successMsg = result.data.message;
                } else {
                    //Show invalid error message
                    this.errorMsg = result.data.message;
                }
            }).catch((error) => {
                //Internal error
                this.errorMsg = result.data.message;
            });

        },
        onCreateNewPassSubmit(event) {
            this.errorMsg = '';
            this.successMsg = '';
            // console.log(this.companyCode)
            var params = {
                newPass: this.newPass,
                token: this.$route.query.token,
            };

            event.preventDefault();
            // console.log(this.newPass, this.confirmPass);
            if(this.newPass === this.confirmPass) {
                createNewPass(params).then((result) => {
                    if (result.data.success) {
                        // this.$router.replace({'token': null});
                        this.$notify.success({
                            title: 'Success',
                            message: result.data.message,
                        });
                        this.$router.push({ name: 'Login' });
                        this.successMsg = result.data.message;
                    } else {
                        //Show invalid error message
                        this.errorMsg = result.data.message;
                    }
                }).catch((error) => {
                    //Internal error
                    this.errorMsg = "Internal Error.";
                });
            } else {
                this.errorMsg = "Passwords didn't match."
            }
            
        }
    }
};