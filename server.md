
シンプルなReactとデータベースのCRUDアプリを作成する。

https://qiita.com/muijp/items/573247b12ff0bc4e5d3c#crud%E3%82%A2%E3%83%97%E3%83%AA%E3%81%A8%E3%81%AF


# 環境構築


以下サーバサイド用にcrudディレクトリ内で行う。
```
yarn init -y
yarn add express
yarn add mongoose
yarn add body-parser
```

crudディレクトリ内で

```
yarn create react-app client
cd client
yarn add axios
```
を行う。axiosはHTTPリクエスト対応のため導入。

- crud
    - client
    - node_modules
    - package.json
    - server.js
    - yarn.lock

clientを適当に作る。
clientのaxiosを作成。
server.jsに色々書いて、接続。

スキーマ作成してインポート、接続する。
new スキーマ名.save(コールバック)でdbに保存する。

後は感覚で

# heroku

https://qiita.com/xiz-tky/items/594406c779b2f9b0457a












