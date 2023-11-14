const mongoose = require('mongoose')

const ekstrakulikulerSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  nama: {
    type: String,
    required: true,
  },
  perlengkapan: {
    type: String
  },
  pengajar: {
    type: String,
    required: true,
  },
  jadwal: {
    type: String,
    required: true,
  },
  tempat: {
    type: String,
    required: true,
  },
  kuota: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Ekstrakulikuler', ekstrakulikulerSchema)