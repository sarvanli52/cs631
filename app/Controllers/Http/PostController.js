'use strict'

class PostController {

    async index({view}){

       const postList = [
           {title: "Kablosuzkeid 1"},
           {title: "Kablosuzkeid 2"},
           {title: "Kablosuzkeid 3"},
           {title: "Kablosuzkeid 4"},
           {title: "Kablosuzkeid 5"},
       ]

        return view.render("home", {
            postList : postList
        })
    }
}

module.exports = PostController
