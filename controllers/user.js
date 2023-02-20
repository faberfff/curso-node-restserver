const { response, request } = require("express");

const usersGet = (req, res = response) => {


  res.json({
    msg: "get API -  controlador-Get ",
    
  });
};

const usersPost =  (req, res = response) => {
   
    const body = req.body;

    res.json({
      msg: "post API - controlador-Post",
      body
    });
  }

const usersPut = (req, res = response) => {

    const { id } = req.params

    res.json({
      msg: "put API - controlador-Put",
      id
    });
  }

  const usersPatch =  (req, res = response) => {
    res.json({
      msg: "patch API - controlador-Patch",
    });
  }

  const usersDelete = (req, res = response) => {
    res.json({
      msg: "delete API - controlador-Delete",
    });
  }

module.exports = {
  usersGet,
  usersPost,
  usersPut,
  usersPatch,
  usersDelete
};
