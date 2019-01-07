const express = require('express');
const router = express.Router();

const Details = require('../model/schema');

// retrive data - http get method
router.get('/details', (req, res, next) => {
    // res.send('post data');
    Details.find((err, details) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json(details);
        }
    });
});

//http  post method
router.post('/detail', (req, res, next) => {
    let newEmployeeDetail = new Details({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        eMail: req.body.eMail,
        mobile: req.body.mobile,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        salaryCredited: req.body.salaryCredited
    });
    newEmployeeDetail.save((err, detail) => {
        if (err) {
            res.json(err);
        }
        else {
            res.json({ message: 'new employee has been added successfully' });
        }
    });

});

// http update method
router.put('/detail/:id', (req, res, next) => {
    Details.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            eMail: req.body.eMail,
            mobile: req.body.mobile,
            address1: req.body.address1,
            address2: req.body.address2,
            city: req.body.city,
            salaryCredited: req.body.salaryCredited
        }
    },
    (err, result) =>{
        if(err){
            res.json(err);
        }
        else{
            res.json(result);
        }
    });
});

// http delete method
router.delete('/detail/:id', (req, res, next) => {
    Details.remove({_id: req.params.id}, (err, result) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(result)
        }
    });
});

module.exports = router;