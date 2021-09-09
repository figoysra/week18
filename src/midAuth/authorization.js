const connection = require("../config/db")
// const usersmodel = require(""""")

const authorization = (req, res, next ) =>{
    const id = req.userId;
    connection.query(
      `select * from tbl_users where id='${id}'`,
      (err, result) => {
        if(err){
            res.status(401).json(err)
        }else{
            if(result[0].admin === 0){
                next()
            }else{
                res.status(401).json({
                    msg: "You Do Not Have Permission To Access",
                });
            }
        }
      }
    );
}
module.exports = authorization