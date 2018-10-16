import { createArticle } from "../../services/article";
var _ = require("lodash");
import moment from "moment";

export default {
  data() {
    return {
      form: {
        title: "",
        content: "",
        fetchingData: true
      }
    };
  },
  methods: {
    onSubmit() {
        this.createArticleApi(this.form.content, this.form.title)
    },
    createArticleApi(content, title) {
      var params = {
        userId: this.$store.state.userInfo.userId,
        content: content,
        title: title
      };
      this.fetchingData = true;
      createArticle(params)
        .then(result => {
          if (result.data.success) {

            this.form.content = "";
            this.form.title = "";
            this.fetchingData = false;
          } else {
            this.fetchingData = false;
          }
        })
        .catch(customer => {
          // this.error('Internal Error.');
          this.fetchingData = false;
        });
    }
  }
};
