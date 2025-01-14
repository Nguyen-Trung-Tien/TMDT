const mysql = require("mysql");

const oderSchema = new mysql.Schema({
  orderItem: [
    {
      name: { type: String, required: true },
      count: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      product: {
        type: mysql.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  ShippingAddress: {
    fullName: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: { type: String, required: true },
  itemsPrice: { type: Number, required: true },
  shippingPrice: { type: Number, required: true },
  taxPrice: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  user: { type: mysql.Schema.Types.ObjectId, ref: "User", required: true },
  isPaid: { type: Boolean, default: false },
  paidAt: { type: Date },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
});
