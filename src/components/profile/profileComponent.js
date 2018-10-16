import { fetchUserDetails } from "../../services/user";
var _ = require("lodash");
import moment from "moment";

export default {
  name: "profile",
  data() {
    return {
      fetchingData: true,
      userId: null,
      userDetails: null,
      tabPosition: "left",
      ruleForm2: {
        currentPass:"",
        pass: "",
        checkPass: ""
      },
      rules2: {

      },
      labelPosition: 'left',
      ruleForm1: {
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        role: ''
      },
    };
  },
  methods: {
    submitForm(formName) {
      if(this.ruleForm1.first_name !== this.userDetails.first_name) {
        // call updateProfile Api
      } 
      if (this.ruleForm1.last_name !== this.userDetails.last_name) {
        // call updateProfile Api
      }
      if (this.ruleForm1.email !== this.userDetails.email) {
        // call updateProfile Api  
      }
      if (this.ruleForm1.company !== this.userDetails.company) {
        // call updateProfile Api       
      }
      if (this.ruleForm1.role !== this.projectDetails.role) {
        // call updateProfile Api
      }
    },
   
    fetchUserData() {
      var params = {
        userId: this.$store.state.userInfo.userId
      };
      this.fetchingData = true;
      fetchUserDetails(params)
        .then(result => {
          if (result.data.success) {
            this.userDetails = result.data.data;
            this.ruleForm1.first_name = result.data.data.firstName;
            this.ruleForm1.last_name = result.data.data.lastName;
            this.ruleForm1.email = result.data.data.email;

            this.fetchingData = false;
          } else {
            //this.$toast.customer(result.data.message);
            this.fetchingData = false;
          }
        })
        .catch(customer => {
          // this.error('Internal Error.');
          this.fetchingData = false;
        });
    }
  },
  created() {
    this.fetchUserData();
  }
};
