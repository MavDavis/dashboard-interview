import { createStore } from "vuex";

export default createStore({
  state: {
    sum:null,
    users: [
      {
        id: 1,
        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 2,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 3,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 4,
        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 5,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 6,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 500,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 7,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 8,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 9,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 10,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 11,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 12,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 13,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 14,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 15,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 16,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 17,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 18,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 19,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 20,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 21,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 22,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 23,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 24,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 25,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 26,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 27,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 28,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 29,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 30,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 31,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 32,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 33,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 34,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 35,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 36,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 37,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 38,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 39,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 40,

        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 41,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 42,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 43,
        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 44,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 45,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 46,
        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 47,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 48,
        name: "Steeve Mike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 49,
        name: "David Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
      {
        id: 50,
        name: "George Mary",
        gmail: "mary@gmail,com",
        status: true,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        details: [
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
          {
            date: "12/APR/2020",
            userActivity:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies.",
            details:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus, sed purus eu semper morbi id nunc, adipiscing vitae. Ultricies suspendisse vestibulum.",
          },
        ],
      },
    ],
  },
  getters: {},
  mutations: {
    showMore(state, payload) {
      state.users = state.users.map((item) =>
        item.id == payload ? { ...item, viewmore: !item.viewmore } : item
      );
    },
    addSingleFocus(state, payload) {
      state.users = state.users.map((item) => {
        if (item.id === payload) {
          return { ...item, focused: item.focused };
        }
        return { ...item, focused: false };
      });
    },
    addFocus(state) {
      state.users.map((item) => ({ ...item, focused: false }));
    },
    payDues(state) {
      let focus = state.users.find((item) => item.focused == true);
      if (focus) {
     state.users =    state.users.map((item) => {
          if (item.id === focus.id) {
            let obj = { ...item, paid: true, unpaid: false, overdue: false, focused:false };
            return obj;
          } else {
            return item;
          }
        });
      }
    },
    getSum(state){
      state.sum = state.users.reduce((accumulator, object) => {
        return accumulator + object.amount;
      }, 0);
    }
  },
  actions: {},
  modules: {},
});
