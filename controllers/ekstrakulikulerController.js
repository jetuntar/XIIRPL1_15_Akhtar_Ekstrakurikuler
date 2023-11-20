const ekstrakulikuler = require('../models/ekstrakulikuler')
const Ekstrakulikuler = require('../models/ekstrakulikuler')


module.exports = {
  //get all ekstrakulikuler
  index: async (req, res) => {
    try {
      const ekstra = await Ekstrakulikuler.find()
      if(ekstra.length > 0){
      res.status(200).json({
        status: true,
        data: ekstra,
        method: req.method,
        url: req.url
      })
      }else{
        res.json({
          status: false,
          message: "Data masih kosong"
        })
      }
    } catch (error) {
      res.status(400).json({sucess: false})
    }
  },

  //get a ekstra by id
  show: async (req, res) => {
    const {id} = req.params;
    try {
      const ekstra = await Ekstrakulikuler.findOne({id})
      if (!ekstra) {
        return res.status(404).json({
          status: false,
          message: "Data tidak ditemukan",
        });
      }
  
      res.json({
        status: true,
        data: ekstra,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapat",
      });
    } catch (error) {
      res.status(400).json({success: false})
    }
  },

  //menambahkan data
  store: async (req, res) => {
    try {
      const ekstra = await Ekstrakulikuler.create(req.body)
      res.status(200).json({
        status: true,
        data: ekstra,
        method: req.method,
        url: req.url,
        message: "Data berhasil ditambahkan"
      })
    } catch (error) {
      res.status(400).json({success: false})
    }    
  },

  //update data
  update: async (req, res) => {
    const {id} = req.params
    try {
      const ekstra = await Ekstrakulikuler.findOneAndUpdate({id}, req.body, {
        new: true,
        runValidators: true
      })
      res.json({
        status: true,
        data: ekstra,
        method: req.method,
        url: req.url,
        message:"Data berhasil diubah"
      })

    } catch (error) {
      res.status(400).json({success: false})
    }
  },

  //hapus data
  delete: async (req, res) => {
    const {id} = req.params
    try {
      await Ekstrakulikuler.findOneAndDelete({id})
      res.json({  
        status: true,
        method: req.method,
        url: req.url,
        message:"Data berhasil dihapus"
      })
    } catch (error) {
      res.status(400).json({success: false})
    }
  },
  //get a ekstra by nama
  showName: async (req, res) => {
    const {nama} = req.params;
    try {
      const ekstra = await Ekstrakulikuler.findOne({nama})
      if (!ekstra) {
        return res.status(404).json({
          status: false,
          message: "Data tidak ditemukan",
        });
      }
  
      res.json({
        status: true,
        data: ekstra,
        method: req.method,
        url: req.url,
        message: "Data berhasil didapat",
      });
    } catch (error) {
      res.status(400).json({success: false})
    }
  },
}