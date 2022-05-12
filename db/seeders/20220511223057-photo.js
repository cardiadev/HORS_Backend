"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Photos",
      [
        {
          name: "Junior Suite 01",
          alt: "Photo of the room - Junior Suite 01",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1651991273/hors/rooms/room_junior_01_n3bbl0.jpg",
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Junior Suite 02",
          alt: "Photo of the room - Junior Suite 02",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_02_gatotv.jpg",
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Junior Suite 03",
          alt: "Photo of the room - Junior Suite 03",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_03_wpjy20.jpg",
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Junior Suite 04",
          alt: "Photo of the room - Junior Suite 04",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_04_ponu9l.jpg",
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Junior Suite 05",
          alt: "Photo of the room - Junior Suite 05",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_05_ykkhho.jpg",
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Junior Suite 06",
          alt: "Photo of the room - Junior Suite 06",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652066695/hors/rooms/room_junior_06_zcbnfp.jpg",
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Master Suite 01",
          alt: "Photo of the room - Master Suite 01",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311181/hors/rooms/room_master_01_eou3bd.jpg",
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Master Suite 02",
          alt: "Photo of the room - Master Suite 02",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311181/hors/rooms/room_master_02_g6djap.jpg",
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Master Suite 03",
          alt: "Photo of the room - Master Suite 03",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311181/hors/rooms/room_master_03_gjjutj.jpg",
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Master Suite 04",
          alt: "Photo of the room - Master Suite 04",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311181/hors/rooms/room_master_04_pfvv0v.jpg",
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Master Suite 05",
          alt: "Photo of the room - Master Suite 05",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311180/hors/rooms/room_master_05_vuhyjp.jpg",
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delux Suite 01",
          alt: "Photo of the room - Delux Suite 01",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311181/hors/rooms/room_delux_01_s6kqyy.jpg",
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delux Suite 02",
          alt: "Photo of the room - Delux Suite 02",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311180/hors/rooms/room_delux_02_znq8hf.jpg",
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delux Suite 03",
          alt: "Photo of the room - Delux Suite 03",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311180/hors/rooms/room_delux_03_ya3ouf.jpg",
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delux Suite 04",
          alt: "Photo of the room - Delux Suite 04",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311182/hors/rooms/room_delux_04_bxoioj.jpg",
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Delux Suite 05",
          alt: "Photo of the room - Delux Suite 05",
          url: "https://res.cloudinary.com/cardiadev/image/upload/v1652311180/hors/rooms/room_delux_05_qev5js.jpg",
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(Photos, null, {});
  },
};
