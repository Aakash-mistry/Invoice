const {
     createNewInvoice,
     getAllInvoice,
     searchInvoice,
} = require("./controller/invoiceController");
const router = require("express").Router();

// ! INVOICE ROUTES

router.post("/create-invoice", createNewInvoice);
router.get("/all-invoices", getAllInvoice);
router.get("/search", searchInvoice);

module.exports = router;
