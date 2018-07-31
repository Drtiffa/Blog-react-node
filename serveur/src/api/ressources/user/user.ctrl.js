import  userService from './user.service';
import User from './userModel'
import Joi from "joi"

export default {
    async signup(req,res){
        try{
            const { value, error } = userService.validateSignup(req.body);
            if(error){
                return res.status(400).json(error)
            }
            const encryptedPass = userService.encryptedPass(value.password)
            
            const user = await User.create({
                firstName:value.firstName,
                lastName:value.lastName,
                email:value.email,
                password:encryptedPass,
            });
                return res.redirect('http://localhost:3000/login');
            }catch(err){
                console.error(err);
                return res.status(500).send(err);
            }
    },
    async login(req,res){
            try{
                const { value , error } = userService.validateLogin(req.body);
                if(error){
                    return res.status(400).json(error)
                }
                const user = await User.findOne({email:value.email});
                if(!user){
                    return res.status(401).json({err :"not autorised"})
                };
                const authenticated = userService.comparePassword(
                    value.password,
                    user.password
                 );
                if(!authenticated){
                    return res.status(401).json({err : "not autorised"});
                }
                return res.redirect('http://localhost:3000/new_article')
                
                }catch(err){
                    console.error(err)
                    return res.status(500).send(err)
                }
    },

    authenticated(req,res){
                return res.json(req.user)
    },
    async findAll(req, res) {
         try {
             const {
                 page,
                 perpage
             } = req.query;
             const options = {
                 page: parseInt(page, 10) || 1,
                 limit: parseInt(perpage, 10) || 10
             };
             const user = await User.paginate({}, options)
             res.json(user)
         } catch (err) {
             console.error(err)
             return res.status(500).send(err)
         }
    },
    async findOne(req, res) {
        try {
            const {
                id
            } = req.params
            const user = await User.findById(id);
            if (!user) {
                return res.status(404).json({
                    err: "could not find a customer"
                })
            }
            return res.json(user)
        } catch (err) {
            console.error(err)
            return res.status(500).send(err)
        }
    },
    async update(req, res) {
           try {
               const {
                   id
               } = req.params //le password n'est pas crypté à son changement
               const schema = Joi.object().keys({
                   firstName: Joi.string().required(),
                   lastName: Joi.string().required(), 
                   email: Joi.string().email().required(),
                   password: Joi.string().required(),
               })
               const {
                   value,
                   error
               } = Joi.validate(req.body, schema)
               if (error && error.details) {
                   return res.status(400).json(error)
               }
               const user = await User.findByIdAndUpdate({
                   _id: id
               }, value, {
                   new: true
               });
               if (!user) {
                   return res.status(404).json({
                       err: 'could not find a customer'
                   })
               }
               return res.json(user)
           } catch (err) {
               console.error(err)
               return res.status(500).send(err)
           }
    },
    async delete(req, res) {
        try {
            const {
                id
            } = req.params
            const user = await User.findByIdAndRemove({
                _id: id
            })
            if (!user) {
                return res.status(404).json({
                    err: 'no customer found'
                })
            }
            return res.json({
                msg: 'customer deleted'
            })
        } catch (err) {
            console.error(err)
            return res.status(500).send(err)
        }
    }
};
    
