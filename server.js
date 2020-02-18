const express = require("express")

const mongoose = require("mongoose")

const bodyParser = require("body-parser")

const User = require("./models/model")

const app = express()
const port = 3001

const url = "mongodb://localhost/crud"

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

mongoose.connect(url, err => {
    if (err) {
        throw new Error(err)
    }
    console.log("データベースに接続完了")

    app.post("/api/user", (req, res)=>{
        console.log(`POST来たよ`)
        console.log(req.body)
        // res.send() => sendを2回するとエラーが出る。
        new User({
            name: req.body.name,
            email: req.body.email
        }).save(err => {
            if (err) {res.status(500)}
            res.status(200).send(`${req.body.name}のデータ作ったよ`)
        })
    })
    app.get("/api/user", (req, res) => {
        User.find({}, (err, userArray)=>{
            if (err) res.status(500).send(`失敗`)
            res.status(200).send(userArray)
        })
    })

    app.delete("/api/user", (req, res)=>{
        // req.bodyには直接第二引数に指定したものが入ってくるので、idのみ取り出す
        const { id } = req.body
        console.log("削除きたよ")
        // console.log(id)
        //  idを見つけて削除を行っている。
        User.findByIdAndRemove(id, err=>{
            if (err) res.status(500).send()
            // userの新しい配列を送る。
            User.find({}, (err, userArray)=>{
                if (err) res.status(500).send()
                res.status(200).send(userArray)
            })

        })
    })


    app.listen(port, err => {
        if (err) {
            throw new Error(err)
        }
        console.log(`listening on port ${port}`)
    })
})








