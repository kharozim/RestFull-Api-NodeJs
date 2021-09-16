const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.status(200).json({
        message:"get method user"
    });
});

router.post('/',(req,res,next) =>{
    res.status(200).json({
        message:"post method user"
    });
});

router.get('/:nim',(req,res,next) =>{

    const nim = req.params.nim;
    if (nim === "123"){
        res.status(200).json({
            message :"NIM 123"
        })
    } else{
        res.status(200).json({
             message : "NIM LAIN"
        })
    }

    res.status(200).json({
        message:"post method user"
    });
});


module.exports = router;