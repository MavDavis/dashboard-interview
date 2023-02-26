import { createStore } from "vuex";
import { debounce } from 'lodash';

export default createStore({
  state: {
    sum: null,
    users: [
      {
        id: 1,
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "David ",
        lastname: "Oius",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "Bina ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Wike",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: " Oius",
        lastname: "Tunde",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Tosin",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "David ",
        lastname: "Toyin",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Braden",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "David ",
        lastname: "Pius",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Prisma",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: " Oius",
        lastname: "Oius",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "Spectre ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "David ",
        lastname: "Bisnja",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "David",
        lastname: "Oprag",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "David",
        lastname: "Winger",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: " Oius",
        lastname: "Wnka",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: " Oius",
        lastname: "Broma",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: " Oius",
        lastname: "Otuocha",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Samson",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "George ",
        lastname: "Mary",
        gmail: "mary@gmail,com",
        status: false,
        paid: false,
        unpaid: true,
        overdue: false,
        amount: 300,
        viewmore: false,
        dueDate: "15/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "Steeve",
        lastname: "Okoye",
        gmail: "mike@gmail,com",
        status: false,
        paid: false,
        unpaid: false,
        overdue: true,
        amount: 200,
        viewmore: false,
        dueDate: "15/MAR/2020",
        lastLogin: "14/APR/2020",
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
        firstname: "David ",
        lastname: "Menka",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Winterz",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
        firstname: "David ",
        lastname: "Check",
        gmail: "samson@gmail,com",
        status: true,
        paid: true,
        unpaid: false,
        overdue: false,
        amount: 200,
        dueDate: "12/APR/2020",
        lastLogin: "10/APR/2020",
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
    searchInput: "",
    debounceTimeout:null,

    showModal: false,
    secondUsers: [],
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
        state.users = state.users.map((item) => {
          if (item.id === focus.id) {
            let obj = {
              ...item,
              paid: true,
              unpaid: false,
              overdue: false,
              focused: false,
            };
            return obj;
          } else {
            return item;
          }
        });
      }
    },
    getSum(state) {
      state.sum = state.users.reduce((accumulator, object) => {
        return accumulator + object.amount;
      }, 0);
      state.secondUsers = state.users;
    },
    filterByButtonName(state, payload) {
      if (payload === "All") {
        state.users = state.secondUsers;
      } else if (payload === "Paid") {
        state.users = state.secondUsers;

        state.users = state.users.filter((item) => item.paid === true);
      } else if (payload === "Unpaid") {
        state.users = state.secondUsers;

        state.users = state.users.filter((item) => item.unpaid === true);
      } else if (payload === "Overdue") {
        state.users = state.secondUsers;

        state.users = state.users.filter((item) => item.overdue === true);
      }
      state.sum = state.users.reduce((accumulator, object) => {
        return accumulator + object.amount;
      }, 0);
    },
    sortBy(state, payload) {
      if (payload === "active") {
        state.users = state.users.sort((a, b) => {
          if (a.status && !b.status) {
            return -1;
          } else if (!a.status && b.status) {
            return 1;
          } else {
            return 0;
          }
        });
      } else if (payload === "inactive") {
        state.users = state.users.sort((a, b) =>
          a.status === b.status ? 0 : a.status ? 1 : -1
        );
      } else if (payload === "all") {
        state.users = state.secondUsers;
      } else if (payload === "lastname") {
        state.users = state.users.sort((a, b) => {
          const nameA = a.lastname.toUpperCase();
          const nameB = b.lastname.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else if (payload === "firstname") {
        state.users = state.users.sort((a, b) => {
          const nameA = a.firstname.toUpperCase();
          const nameB = b.firstname.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      } else if (payload === "duedate") {
        state.users = state.users.sort((a, b) => {
          if (a.dueDate < b.dueDate) {
            return -1;
          }
          if (a.dueDate > b.dueDate) {
            return 1;
          }
          return 0;
        });
      } else if (payload === "laslogin") {
        state.users = state.users.sort((a, b) => {
          if (a.lastLogin < b.lastLogin) {
            return -1;
          }
          if (a.lastLogin > b.lastLogin) {
            return 1;
          }
          return 0;
        });
      }
      state.showModal = false;
    },
    closeModal(state) {
      state.showModal ? false : false;
    },
    toggleModal(state) {
      state.showModal = !state.showModal;
    },
    searchFunction(state) {
      let searchInput = state.searchInput;

      if (searchInput.length > 0) {
return      } else {
        state.users = state.secondUsers;
      }
    },
  },
  actions: {  
    search: debounce(({ commit, state }) => {
    let searchInput = state.searchInput;
    const filteredUsers = state.users.filter((user) => {
      const { firstname, lastname, gmail } = user;
    const userDetails = (`${firstname} ${lastname} ${gmail}`  );

      return (
        userDetails.toLowerCase().includes(searchInput.toLowerCase())
      )
    });
    if(searchInput.length > 0){
      state.users = filteredUsers
    }else{
      state.users = state.secondUsers
    }
        commit('searchFunction', searchInput);
    // ...
  }, 500)
},





  modules: {},
});
