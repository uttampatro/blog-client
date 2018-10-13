import { fetchFeeds } from "../../services/feed";
var _ = require("lodash");
import moment from "moment";

export default {
  name: "feedPage",
  data() {
    return {
      fetchingData: true,
      feedList: []
    };
  },
  methods: {
    fetchFeedsData() {
      this.fetchingData = true;
      fetchFeeds()
        .then(result => {
          if (result.data.success) {
            // this.userDetails = result.data.data;
            // this.ruleForm1.first_name = result.data.data.first_name;
            // this.ruleForm1.last_name = result.data.data.last_name;
            // this.ruleForm1.email = result.data.data.email;
            // this.ruleForm1.company = result.data.data.company;
            // this.ruleForm1.role = result.data.data.role;
            this.feedList = result.data.data.articles;
            console.log(this.feedList, "<<<<<<")

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
    this.fetchFeedsData();
  }
};
