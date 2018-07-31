import React from "react"

const EditArticle = () => {
    return (
        <div>
            <h1> Crée un nouvel article </h1>
            <form className="col-md-5" method="POST" action="http://localhost:5678/api/article/">
                <div className="form-group">
                    <label>Titre</label>
                    <input type="text" name="titre" className="form-control" id="titre" />
                </div>
                <div className="form-group">
                    <label>Text</label>
                    <textarea type="text" name="text" className="form-control" id="text"></textarea>
                </div>
                <div className="form-group">
                    <label>Publier</label>
                    <input type="checkbox" name="isPublished" value="true" className="form-control" id="exampleInputPassword1" />
                </div>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Créer</button>
            </form>
        </div>
    )
}

export default EditArticle