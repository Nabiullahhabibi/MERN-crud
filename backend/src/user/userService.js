var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {

    userModel.find({}).then(result => {
          console.log(result);
          // res.send(result);
        }).catch(err => {
          console.log(err);
          // res.send(err);
        });
 
 }

 module.exports.createUserDBService = (userDetails) => {
   
        var userModelData = new userModel();
 
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;
        userModelData.save().then(() => {
          console.log(data, 'is added successfully.');
          // res.send({message: 'added successfully.'});
        }).catch(err => {
          console.log(err);
          // res.send(err);
        });
      

    // return new Promise(function myFn(resolve, reject) {
 
    //     var userModelData = new userModel();
 
    //     userModelData.name = userDetails.name;
    //     userModelData.address = userDetails.address;
    //     userModelData.phone = userDetails.phone;

    //     userModelData.save(function resultHandle(error, result) {
 
    //         if (error) {
    //             reject(false);
    //         } else {
    //             resolve(true);
    //         }
    //     });
 
    // });
 
 }


 module.exports.updateUserDBService = (id,userDetails) => {     

    userModel.findByIdAndUpdate(id,{$set:userDetails},{returnOriginal:false}).then(result=> {
              console.log(result);
              console.log('updated');

              //res.send({message:'updated'});
            }).catch(err=> {
              console.log(err);
             // res.send(err);
            });
 
 }

 module.exports.removeUserDBService = (id) => { 
    userModel.findByIdAndDelete(id).then(result=> {
        console.log(result);
        console.log('Deleted');
       // res.send({message:'Deleted'});
      }).catch(err=> {
        console.log(err);
        //res.send(err);
      });
 
 }