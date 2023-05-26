let Products = [
  {
    name:'Coca-cola',
    price:230,
    description:'Gaseosa sabor cola',
    stock:300,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Cerveza Quilmes',
    price:500,
    description:'Cerveza Rubia',
    stock:1000,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    name:'Yerba Mate',
    price:130.75,
    description:'Yerba para tomar mate',
    stock:100,
    createdAt:new Date(),
    updatedAt:new Date()
  },
]


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

 await queryInterface.bulkInsert('Products', Products, {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
    Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
