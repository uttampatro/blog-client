import { registerUser } from "../../../services/auth";
import router from "../../../router";

export default {
    name: "register",
    data() {
        return {
            companyCode: '',
            email: '',
            password: '',
            errorMsg: '',
            successMsg: '',
            mobile: '',
            first_name: '',
            last_name: ''
        };
    },
    methods: {
        onRegisterSubmit(event) {
            this.errorMsg = '';
            this.successMsg = '';
            // console.log(this.companyCode)
            var params = {
				firstName: this.first_name,
				lastName: this.last_name,
                email: this.email,
                password: this.password,
                mobile: this.mobile
            };
            
            event.preventDefault(); 
            registerUser(params).then((result) =>{
                if(result.data.success){
                    this.successMsg = result.data.message;
                }else{
                    //Show invalid error message
                    this.errorMsg = result.data.message;
                }
            }).catch((error) =>{
                //Internal error
                console.log(error)
                this.errorMsg = "Internal Error.";
            });
        }
    }
};