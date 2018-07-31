import Joi from 'joi'
import Article from './articlesModel'

export default {
    async create(req,res){
        try{
            const schema = Joi.object().keys({
                titre: Joi.string().required(),
                date : Joi.date(),
                text : Joi.string().required(),
                isPublished : Joi.boolean(),
                
            });
            req.body.date = Date.now();
            const { value , error } = Joi.validate(req.body,schema);
            if(error && error.details){
                return res.status(400).json(error);
            }
            const article = await Article.create(Object.assign({},value ));
            console.log(article)
            return res.json(article);
        }catch(err){
            console.log(err)
            return res.status(500).send(err)
        }
    },
    async findAll(req,res) {
        try{
                const articles = await Article.find({})
                res.json(articles)
        }catch (err){
                console.error(err)
                return res.status(500).send(err)
            }
         },
    async findOne(req,res){
        try{
            const { id } = req.params;
            const article = await Article.findById(id)//.populate("Article")
            if(!article){
                return res.status(404).json({err:"Pas d'article"})
            }
            return res.json(article)
        }catch(err){
            console.error(err)
            return res.status(500).send(err)
        }
    },
    async delete(req,res){
        try{
            const { id } = req.params;
            const article = await Article.findByIdAndRemove(id)
            if(!article){
                return res.status(404).json({err : 'no article found'})
            }
            return res.json({message : 'article remove'})
        } catch(err){
            console.error(err);
            return rs.status(500).send(err)
        }
    },
    async update(req,res){
        try{
            const { id } = req.params;
            const schema = Joi.object().keys({
                titre: Joi.string().required(),
                date : Joi.date(),
                text : Joi.string().required(),
                isPublished : Joi.boolean(),
                
            })
            req.body.date = Date.now();
            const{ value , error } = Joi.validate(req.body,schema)
            if(error && error.details){
                return res.status(400).json(error)
            }

            const article = await Article.findOneAndUpdate({_id:id}, value, {new: true})
            if(!article){
                return res.status(404).json({err : 'wer u article at ?'})
            }
            return res.json(article)
            }catch(err){
                console.error(err)
                return res.status(500).send(err)
            }
        }
    };
 
    

  