const mongoose = require("mongoose");
const Reserve = require("../models/Reserve");

const createReservation = async (req, res) => {
  try {
    const { firstName, lastName, date, time, email, phone } = req.body;
    if (!firstName || !lastName || !date || !time || !email || !phone) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    const newReservation = new Reserve({
      firstName,
      lastName,
        date,
      time,
        email,
      phone,
    });

    const savedReservation = await newReservation.save();
    return res.status(201).json({
      success: true,
      message: "Reservation created successfully",
      reservation: savedReservation,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating reservation",
      error: error.message,
    });
  }
};

const getReservation = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }
    const reservations = await Reserve.find({ userId });
    if (reservations.length === 0) {
      return res.status(404).json({ success: false, message: "No reservations found for this user" });
    }
    return res.status(200).json({
      success: true,
      reservations,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching reservations",
      error: error.message,
    });
  }
};

module.exports = {
  createReservation,
  getReservation,
};