const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
     {
          seller: {
               type: mongoose.Schema.Types.String,
               required: true,
               trim: true,
          },
          invoiceName: {
               type: mongoose.Schema.Types.String,
               required: true,
          },
          invoiceDate: {
               type: mongoose.Schema.Types.Date,
               required: true,
          },
          category: {
               type: mongoose.Schema.Types.String,
               required: true,
          },
          amount: {
               type: mongoose.Schema.Types.Number,
               required: true,
          },
          properties: {
               type: mongoose.Schema.Types.String,
               required: true,
               trim: true,
          },
     },
     {
          timestamps: true,
     }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
