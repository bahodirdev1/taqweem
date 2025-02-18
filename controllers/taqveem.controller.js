const { taqveem } = require('../models/taqveem.schema')

const getAll = async (req, res) => {
	try {
		const data = await taqveem.find().sort({ serial: 1 });

		return res.status(200).json(data)
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}

const getOne = async (req,res) => {
  try {
    const { serial } = req.params
    const result = await taqveem.findOne({ serial: serial })

    if (!result) {
      return res.status(404).json({ message: "Ma'lumot topilmadi" })
    }
    return res.status(200).json(result)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message })
  }
}

const create = async (req, res) => {
  try {
    const { serial,
      category,
      date,
      shortDate,
      day,
      sehri,
      fajar,
      ifter } = req.body
    const newData = await taqveem.create({ serial,
      category,
      date,
      shortDate,
      day,
      sehri,
      fajar,
      ifter })
    
    return res.status(201).json({
      message: "Muvaffaqiyatli yaratildi",
      newData
    })
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message }) 
  }
}

const insertManyTaqveem = async (req, res) => {
  try {
    const taqveems = req.body;

    const newTaqveems = await taqveem.insertMany(taqveems);

    return res.status(201).json({
      message: "Barcha taqveemlar muvaffaqiyatli qo‘shildi",
      newTaqveems,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};



const update = async (req, res) => {
  try {
    const { serial } = req.params
    const {
      category,
      date,
      shortDate,
      day,
      sehri,
      fajar,
      ifter } = req.body 

    const updatedData = await taqveem.findOneAndUpdate(
      { serial }, 
      { serial,
        category,
        date,
        shortDate,
        day,
        sehri,
        fajar,
        ifter },
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
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}


const deleteOne = async (req, res) => {
	try {
		const { serial } = req.params

		const result = await taqveem.deleteOne({ serial: serial })

		if (result.deletedCount > 0) {
			return res.status(200).json({
				message: "Muvaffaqiyatli o'chirildi",
				serial: serial,
			})
		} else {
			return res.status(404).json({
				message: "Ma'lumot topilmadi",
			})
		}
	} catch (error) {
		console.log(error.message)
		res.status(500).json({ error: error.message })
	}
}


module.exports = {
	getAll,
	getOne,
	create,
	update,
	deleteOne,
  insertManyTaqveem
}