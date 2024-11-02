"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Pupuk Organik",
          code: "BRG/24/11/00001",
          stock: "100",
          price: "50000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Benih Padi",
          code: "BRG/24/11/00002",
          stock: "200",
          price: "15000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pestisida",
          code: "BRG/24/11/00003",
          stock: "50",
          price: "30000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Alat Penyemprot",
          code: "BRG/24/11/00004",
          stock: "30",
          price: "250000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cangkul",
          code: "BRG/24/11/00005",
          stock: "80",
          price: "45000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kapas",
          code: "BRG/24/11/00006",
          stock: "60",
          price: "60000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kedelai",
          code: "BRG/24/11/00007",
          stock: "150",
          price: "12000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tomat",
          code: "BRG/24/11/00008",
          stock: "90",
          price: "30000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cabai",
          code: "BRG/24/11/00009",
          stock: "70",
          price: "25000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bawang Merah",
          code: "BRG/24/11/00010",
          stock: "40",
          price: "28000",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Products", null, {});
  },
};
