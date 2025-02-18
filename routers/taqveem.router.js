const { Router } = require("express");
const {
  getAll,
  create,
  deleteOne,
  update,
  getOne,
	insertManyTaqveem,
} = require("../controllers/taqveem.controller");

const taqveemRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Taqveem:
 *       type: object
 *       required:
 *         - serial
 *         - category
 *         - date
 *         - shortDate
 *         - day
 *         - sehri
 *         - fajar
 *         - ifter
 *       properties:
 *         serial:
 *           type: integer
 *           description: Unikal identifikator
 *         category:
 *           type: string
 *           description: Taqvim turi (masalan, Ramazon)
 *         date:
 *           type: string
 *           format: date
 *           description: To'liq sana
 *         shortDate:
 *           type: string
 *           description: Qisqa sana formati
 *         day:
 *           type: string
 *           description: Haftaning kuni
 *         sehri:
 *           type: string
 *           description: Saharlik vaqti
 *         fajar:
 *           type: string
 *           description: Bomdod vaqti
 *         ifter:
 *           type: string
 *           description: Iftorlik vaqti
 *       example:
 *         serial: 1
 *         category: "Ramazon"
 *         date: "03 April 2025"
 *         shortDate: "4/3/2025"
 *         day: "Juma"
 *         sehri: "4:27 AM"
 *         fajar: "4:27 AM"
 *         ifter: "6:45 PM"
 */

/**
 * @swagger
 * /api/taqveem:
 *   get:
 *     summary: Barcha taqvim ma'lumotlarini olish
 *     tags: [Taqveem]
 *     responses:
 *       200:
 *         description: Barcha ma'lumotlar ro‘yxati
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Taqveem'
 */
taqveemRouter.get("/taqveem", getAll);

/**
 * @swagger
 * /api/taqveem/{serial}:
 *   get:
 *     summary: Bitta taqvim ma'lumotini olish
 *     tags: [Taqveem]
 *     parameters:
 *       - in: path
 *         name: serial
 *         schema:
 *           type: integer
 *         required: true
 *         description: Taqvim ID-si
 *     responses:
 *       200:
 *         description: Topilgan ma'lumot
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Taqveem'
 *       404:
 *         description: Ma'lumot topilmadi
 */
taqveemRouter.get("/taqveem/:serial", getOne);

/**
 * @swagger
 * /api/taqveem:
 *   post:
 *     summary: Yangi taqvim ma'lumotini qo‘shish
 *     tags: [Taqveem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Taqveem'
 *     responses:
 *       201:
 *         description: Ma'lumot yaratildi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Taqveem'
 *       400:
 *         description: Noto'g'ri so‘rov
 */
taqveemRouter.post("/taqveem", create);

/**
 * @swagger
 * /api/taqveem/{serial}:
 *   put:
 *     summary: Taqvim ma'lumotini yangilash
 *     tags: [Taqveem]
 *     parameters:
 *       - in: path
 *         name: serial
 *         schema:
 *           type: integer
 *         required: true
 *         description: Taqvim ID-si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Taqveem'
 *     responses:
 *       200:
 *         description: Ma'lumot yangilandi
 *       404:
 *         description: Ma'lumot topilmadi
 */
taqveemRouter.put("/taqveem/:serial", update);

/**
 * @swagger
 * /api/taqveem/{serial}:
 *   delete:
 *     summary: Taqvim ma'lumotini o‘chirish
 *     tags: [Taqveem]
 *     parameters:
 *       - in: path
 *         name: serial
 *         schema:
 *           type: integer
 *         required: true
 *         description: Taqvim ID-si
 *     responses:
 *       200:
 *         description: Ma'lumot o‘chirildi
 *       404:
 *         description: Ma'lumot topilmadi
 */
taqveemRouter.delete("/taqveem/:serial", deleteOne);

/**
 * @swagger
 * /api/taqveem/batch:
 *   post:
 *     summary: Bir vaqtning o‘zida bir nechta taqveem ma'lumotlarini qo‘shish
 *     tags: [Taqveem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               $ref: '#/components/schemas/Taqveem'
 *     responses:
 *       201:
 *         description: Barcha taqveem ma'lumotlari muvaffaqiyatli qo‘shildi
 *       400:
 *         description: Noto‘g‘ri so‘rov
 */

taqveemRouter.post("/taqveem/batch", insertManyTaqveem);


module.exports = {
  taqveemRouter,
};
