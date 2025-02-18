const { duaModel } = require('../models/dua.schema')

const getAllDua = async (req, res) => {
	try {
		const data = await duaModel.find().sort({ serial: 1 });

		return res.status(200).json(data)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}

const getOneDua = async (req,res) => {
	const {serial} = req.params

	try {
		const data = await duaModel.findOne({serial: serial})

		if (!data) {
			return res.status(404).json({message: "Ma'lumot topilmadi"})
		} else {
			return res.status(200).json(data)
		}
	} catch (error) {
		console.log(error.message)
		res.status(500).json({error: error.message})
	}
}

const createDua = async (req, res) => {
	const {serial, title, description, arabic_doa, transliteration, translate} = req.body

	try {
		const data = await duaModel.create({serial, title, description, arabic_doa, transliteration, translate})

		return res.status(201).json(data)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({error: error.message})
	}
}

const updateDua = async (req,res) => {
	const {serial} = req.params

	try {
		const {
      serial, title, description, arabic_doa, transliteration, translate} = req.body 

    const updatedData = await duaModel.findOneAndUpdate(
      { serial }, 
      { serial, title, description, arabic_doa, transliteration, translate },
      { new: true }
    )

    if (!updatedData) {
      return res.status(404).json({ message: "Ma'lumot topilmadi" })
    }

    return res.status(200).json({
      message: "Ma'lumot muvaffaqiyatli yangilandi",
      updatedData
    })
	} catch (error) {
		console.log(error.message)
		res.status(500).json({error: error.message})
	}
}


const deleteDua = async (req,res) => {
	const {serial} = req.params

	try {
		const data = await duaModel.findOneAndDelete({serial: serial})

		if (!data) {
			return res.status(404).json({message: "Ma'lumot topilmadi"})
		} else {
			return res.status(200).json({
				data,
				message: "Ma'lumot o'chirildi"
			})
		}
	} catch (error) {
		console.log(error.message)
		res.status(500).json({error: error.message})
	}
}


module.exports = {
	getAllDua,
	getOneDua,
	createDua,
	deleteDua,
	updateDua
}