export default {
  methods: {
    /******************************Start: Event Related Methods ******************************/
    getEventDisplayDate(date) {
      var dt = moment(date, "x");
      return dt.format("Do MMMM YYYY");
    },
    getEventDisplayTime(date) {
      var dt = moment(date, "x");
      return dt.format("hh:mm:ss A");
    },
    getCustomerDisplayDate(date) {
      var dt = moment(date, "x");
      return dt.format("MMM Do, YYYY");
    },
    getReleventTime(date) {
      return moment(date, "x").fromNow();
    },
    getDateTimeWithoutSeconds(date) {
      return moment(date, "x").format("Do MMM YYYY hh:mm A");
    },
    buildEventTitle(event) {
      //   return event. this.getEventDisplayType(event.eventType);
      if (event.eventType == "page_visit") {
        return "Page Visit";
      }
      if (event.eventType == "mouse_click") {
        return "Mouse Click";
      }
      else if (event.eventType == "new_input") {
        var value = "New Input --> " + event.eventData.value;
        if (event.eventData.previousValue && event.eventData.previousValue != '') {
          value += ', Previous --> ' + event.eventData.previousValue;
        }
        return value;
      } else {
        return event.eventType;
      }
    },
    buildEventSubtitle(event) {
      var data = event.eventData;

      if (event.eventType == "page_visit") {
        return JSON.stringify(data);
      }

      var element = [];
      //Add element name
      if (data.element_name != '') {
        element.push(data.element_name);
      }
      //Add element name
      if (data.element && data.element != '') {
        element.push('<' + data.element.toLowerCase() + '>');
      }
      if (data.element_type != '') {
        element.push(data.element_type);
      }

      //Add element id
      if (data.element_id != '') {
        element.push('#' + data.element_id);
      }

      //Add element class list
      var classList = '';
      if (data.element_class_list) {
        for (var i = 0; i < Object.keys(data.element_class_list).length; i++) {
          classList += ' .' + data.element_class_list[i];
        }
      }

      return {
        'classList': classList,
        'element': element.join(', ')
      };
    },
    noData(msg) {
      this.$notify.warning({
        title: 'Warning',
        message: msg,
      });
    },
    error(err) {
      this.$notify.error({
        title: 'Error',
        message: err,
      });
    },
    getJsonValueIfAvailable(str) {

      if (typeof str === 'object' || str.constructor === Array) return str;
      if (typeof str !== 'string') return null;
      try {
        return JSON.parse(str);
      } catch (e) {
        return null;
      }
    }
  },
  data: function () {
    return {
      filterTimingOptions: {
        '10': 'Last 10 Mins',
        '30': 'Last 30 Mins',
        '60': 'Last 1 Hour',
        '180': 'Last 3 Hour',
        '360': 'Last 6 Hours',
        '1440': 'Last 24 Hours',
        '2880': 'Last 2 Days',
        '': 'Custom'
      },
      sessionTimingOptions: {
        '1440': 'Last 24 Hours',
        '2880': 'Last 2 Days',
        '10080': 'Last 7 Days',
        '20160': 'Last 15 Days',
        '40320': 'Last 30 Days',
        '': 'Custom'
      },
      datePickerShortcutList: {
        size: 'mini',
        format: "dd-MM-yyyy HH:mm:ss",
        shortcuts: [
          {
            text: "Last 10 Mins",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - (3600 * 1000) / 6);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 30 Mins",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - (3600 * 1000) / 2);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 1 Hour",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 2 Hours",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 2);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 3 Hours",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 3);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 6 Hours",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 6);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 24 Hours",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 2 Days",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 2);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last 4 Days",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 4);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "Last Week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      httpMethodList: [
        { key: 'GET', label: 'Get' },
        { key: 'POST', label: 'Post' },
        { key: 'PUT', label: 'Put' },
        { key: 'DELETE', label: 'Delete' },
        { key: 'OPTIONS', label: 'Options' }
      ],
      httpResponseList: [
        { key: 'success', label: 'Success' },
        { key: 'failure', label: 'Failure' }
      ],
      registrationStatus: [
        { key: 'registered', label: 'Registered' },
        { key: 'unregistered', label: 'Not registered' }
      ]
    }
  }
};
