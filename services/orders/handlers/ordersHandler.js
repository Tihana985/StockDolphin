const Orders = require("../../../pkg/orders/ordersSchema");
const Items = require("../../../pkg/items/itemsSchema");
const Suppliers = require("../../../pkg/suppliers/suppliersSchema");

// Show all orders
exports.getAllOrders = async (req, res) => {
  try {
    const item = await Items.findOne({
      name: req.params.itemName,
    });
    if (!item) {
      res.status(408).json({
        status: "fail",
        message: "item not found " + req.params.itemName,
      });
    }

    const orders = await Orders.find({ itemId: item._id });

    res.status(200).json({
      status: "success",
      data: orders,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getAllOrders2 = async (req, res) => {
  try {
    const orders = await Orders.find();
    // .lean();


    // for(let order of orders) {
    //   const item = await Items.findById(order.itemId);
    //   // let item = items.filter(item => {
    //   //   return item._id === order.itemId;
    //   // });
    //   order.itemImage = item.image;
    // }

    res.status(200).json({
      status: "success",
      data: orders,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Show one order
exports.getOneOrder = async (req, res) => {
  try {
    const order = await Orders.findById(req.params.id).populate("items");

    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Create order
exports.createOrder = async (req, res) => {
  try {
    const { supplierId, pricePerUnit, quantity, totalPrice } = req.body;

    const name = req.params.itemName;

    const item = await Items.findOne({
      name: name,
    });

    const supplier = await Suppliers.findById(supplierId);

    const newOrder = await Orders.create({
      name,
      supplierId,
      itemId: item._id,
      supplierName: supplier.name,
      itemName: item.name,
      pricePerUnit,
      quantity,
      totalPrice,
    });

    await Items.findByIdAndUpdate(item._id, {
      $push: { orders: newOrder },
    });

    res.status(200).json({
      status: "success",
      data: {
        order: newOrder,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Make changes in a order
exports.updateOrder = async (req, res) => {
  try {
    const order = await Orders.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: "success",
      data: order,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete order
exports.deleteOrder = async (req, res) => {
  try {
    await Orders.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};