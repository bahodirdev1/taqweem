const { Router } = require("express");
const {
  getAllDua,
  getOneDua,
  createDua,
  deleteDua,
  updateDua,
} = require("../controllers/dua.controller");

const duaRouter = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Dua:
 *       type: object
 *       required:
 *         - serial
 *         - title
 *         - description
 *         - arabic_doa
 *         - transliteration
 *         - translate
 *       properties:
 *         serial:
 *           type: integer
 *           description: Duoning unikal identifikatori
 *         title:
 *           type: string
 *           description: Duoning nomi
 *         description:
 *           type: string
 *           description: Duoning tavsifi
 *         arabic_doa:
 *           type: string
 *           description: Duoning arabcha matni
 *         transliteration:
 *           type: string
 *           description: Duoning lotincha talaffuzi
 *         translate:
 *           type: string
 *           description: Duoning tarjimasi
 *       example:
 *         serial: 1
 *         title: "Saharlik duosi"
 *         description: "Bu ro'za tutish uchun duo, Sahur (Sahur) deb ataladi."
 *         arabic_doa: "وَبِصَوْمِ غَدٍ نَّوَيْتُ مِنْ شَهْرِ رَمَضَانَ"
 *         transliteration: "Navaytu an asuma sovma shahri romazona minal fajri ilal mag'ribi, xolisan lillahi ta`la. Allohu Akbar."
 *         translate: "Ramazon oyining ro'zasini subhdan to kun botguncha tutmoqni niyat qildim. Xolis Alloh uchun. Alloh buyukdir."
 */

/**
 * @swagger
 * /api/dua:
 *   get:
 *     summary: Barcha duolarni olish
 *     tags: [Dua]
 *     responses:
 *       200:
 *         description: Barcha dua ma'lumotlari
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Dua'
 */
duaRouter.get("/dua", getAllDua);

/**
 * @swagger
 * /api/dua/{serial}:
 *   get:
 *     summary: Bitta duoni olish
 *     tags: [Dua]
 *     parameters:
 *       - in: path
 *         name: serial
 *         schema:
 *           type: integer
 *         required: true
 *         description: Dua ID-si
 *     responses:
 *       200:
 *         description: Topilgan dua ma'lumotlari
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dua'
 *       404:
 *         description: Dua topilmadi
 */
duaRouter.get("/dua/:serial", getOneDua);

/**
 * @swagger
 * /api/dua:
 *   post:
 *     summary: Yangi dua qo'shish
 *     tags: [Dua]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dua'
 *     responses:
 *       201:
 *         description: Yangi dua yaratildi
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Dua'
 *       400:
 *         description: Noto'g'ri so‘rov
 */
duaRouter.post("/dua", createDua);

/**
 * @swagger
 * /api/dua/{serial}:
 *   put:
 *     summary: Dua ma'lumotini yangilash
 *     tags: [Dua]
 *     parameters:
 *       - in: path
 *         name: serial
 *         schema:
 *           type: integer
 *         required: true
 *         description: Dua ID-si
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Dua'
 *     responses:
 *       200:
 *         description: Dua ma'lumoti yangilandi
 *       404:
 *         description: Dua topilmadi
 */
duaRouter.put("/dua/:serial", updateDua);

/**
 * @swagger
 * /api/dua/{serial}:
 *   delete:
 *     summary: Dua ma'lumotini o‘chirish
 *     tags: [Dua]
 *     parameters:
 *       - in: path
 *         name: serial
 *         schema:
 *           type: integer
 *         required: true
 *         description: Dua ID-si
 *     responses:
 *       200:
 *         description: Dua muvaffaqiyatli o‘chirildi
 *       404:
 *         description: Dua topilmadi
 */
duaRouter.delete("/dua/:serial", deleteDua);

module.exports = duaRouter;
