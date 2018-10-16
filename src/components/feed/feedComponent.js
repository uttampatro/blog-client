import { fetchFeeds } from "../../services/article";
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

            this.feedList = result.data.data;

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
