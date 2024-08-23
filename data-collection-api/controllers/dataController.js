// Handles the logic for CRUD operations

const Data = require('../models/dataModel');

exports.createData = async (req, res) => {
    try {
        const newData = new Data(req.body);
        await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getData = async (req, res) => {
    try {
        const data = await Data.find();
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getDataById = async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        if (!data) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateData = async (req, res) => {
    try {
        const data = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteData = async (req, res) => {
    try {
        const data = await Data.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ error: 'Data not found' });
        res.status(200).json({ message: 'Data deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
