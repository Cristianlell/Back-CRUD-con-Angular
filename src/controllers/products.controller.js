const db = require('../database/models/')


module.exports={

      getProducts: async (req, res) => {
            let products = await db.Product.findAll();
            try {
                  return res.status(200).json({messaje:'getProducts',amount: products.length , body:products})
                  
            } catch (error) {
                  console.log(error);
                  return res.status(500).json({messaje:'Error en el Servidor'})
            }
      },

      getProduct: async (req, res) => {
            let id = Number(req.params.id);
            try {
                  let product = await db.Product.findByPk(id);
                  if (product) {
                        return res.status(200).json({messaje:'getProduct',amount: product.length , body:[product]})             
                  }
                  return res.status(404).json({messaje:'No se encuentra el producto'})
            } catch (error) {
                  console.log(error);
                  return res.status(500).json({messaje:'Error en el Servidor'})
            }
            
      },

      deleteProduct: async (req, res) => {
            let id = Number(req.params.id);
            try {
                  let product = await db.Product.destroy({where:{id}});
                  if (product) {
                        return res.status(200).json({messaje:'deleteProduct',amount: product.length , body:[product]})
                  }
                
                  return res.status(404).json({messaje:'No se encuentra el producto'})
                  
            } catch (error) {
                  console.log(error);
                  return res.status(500).json({messaje:'Error en el Servidor'})
            }
      },

      addProduct: async (req, res) => {
            let {body} = req
            
            try {
                  let product = await db.Product.create(body)
                  
                  return res.status(201).json({messaje:'addProduct',amount: product.length , body:[product]})
            } catch (error) {
                  console.log(error);
                  return res.status(500).json({messaje:'Error en el Servidor'})
            }
      },

      editProduct: async (req, res) => {
            let id = Number(req.params.id);
            let {body} = req;
            try {
                  let product = await db.Product.findByPk(id)
                  if (product) {
                        let productEdit = await db.Product.update(body, { where: { id } });
                        return res.status(201).json({messaje:'editProduct',amount: productEdit.length , body:[productEdit]})
                  }
                  return res.status(404).json({messaje:'No se encuentra el producto'})
            } catch (error) {
                  console.log(error);
                  return res.status(500).json({messaje:'Error en el Servidor'})
            }
      },
}