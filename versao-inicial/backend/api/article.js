module.exports = app => {
    const {existsOrError, notExistsOrError} = app.api.validation;

    const save = (req, res) => {
        const article = {...req.body}
        if(req.params.id) article.id = req.params.id

        try{
            existsOrError(article.name , 'nome não informado')
            existsOrError(article.description , 'description não informado')
            existsOrError(article.categoryId , 'categoria não informado')
            existsOrError(article.userId , 'Autor não informado')
            existsOrError(article.content , 'Conteúdo não informado')            
        }catch(msg){
            res.status(400).send(msg)
        }

        if(article.id){
            app.db('articles')
                .update(article)
                .where({id: article.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('articles')
        }
    }
}