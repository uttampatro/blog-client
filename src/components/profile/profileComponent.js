import { fetchUserDetails } from "../../services/user";
var _ = require("lodash");
import moment from "moment";

export default {
  name: "home",
  data() {
    var validateCurrentPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input currrent password"));
      } else {
        if (this.ruleForm2.currentPass !== "") {
          this.$refs.ruleForm2.validateField("currentPass");
        }
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("Please input the password again"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("Two inputs don't match!"));
      } else {
        callback();
      }
    };
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
        currentPass: [{ validator: validateCurrentPass, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
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
    resetForm(formName) {
      this.$refs[formName].resetFields();
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
            this.ruleForm1.first_name = result.data.data.first_name;
            this.ruleForm1.last_name = result.data.data.last_name;
            this.ruleForm1.email = result.data.data.email;
            this.ruleForm1.company = result.data.data.company;
            this.ruleForm1.role = result.data.data.role;

            this.fetchingData = false;
          } else {
            //this.$toast.customer(result.data.message);
            this.fetchingData = false;
          }
        })
        .catch(customer => {
          this.fetchingData = false;
        });
    }
  },
  created() {
    this.fetchUserData();
  }
};
