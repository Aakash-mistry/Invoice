const Invoice = require("../../model/invoice");

// ! Invoices
exports.getAllInvoice = async (req, res) => {
     const invoices = await Invoice.find().sort({ invoiceDate: -1 });

     try {
          return res.status(200).json(invoices);
     } catch (err) {
          return res.status(200).json("No inoice found!");
     }
};

exports.createNewInvoice = async (req, res) => {
     // const { seller, category, totalAmount, properties } = req.body;

     const newInvoice = new Invoice({
          seller: req.body.seller,
          invoiceDate: Date.now().toString(),
          category: req.body.category,
          invoiceName: req.body.invoiceName,
          amount: req.body.totalAmount,
          properties: req.body.properties,
     });

     await newInvoice.save();

     try {
          res.status(200).json("Invoice Created!");
     } catch (err) {
          res.status(400).json({ error: err });
     }
};

exports.searchInvoice = async (req, res) => {
     const invoice = req.body.query;
     await Invoice.find({ $or: [{ invoiceName: new RegExp(invoice) }] })
          .then((res) => {
               res.status(200).json({ res });
          })
          .catch((err) => {
               res.status(400).json(err);
          });
};
