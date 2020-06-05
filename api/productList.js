module.exports = (app, ProductListService) => {
    try{
        app.get("/productList", async (req, res) => {
            res.json(await ProductListService.productListdao.getAll())
            return res.rows
        })
    }
    catch (e) {
        res.status(500).end()
    }
    app.get("/productList/:id", async (req, res) => {
        try {
            const productList = await ProductListService.productListdao.getById(req.params.id)
            if (productList === undefined) {
                return res.status(404).end()
            }
            return res.json(productList)
        } catch (e) { res.status(400).end() }
    })
    app.post("/productList", (req, res) => {
        const productList = req.body
        if (!ProductListService.isValid(productList))  {
            return res.status(400).end()
        }
        ProductListService.productListdao.insert(productList)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })
    app.delete("/productList/:id", async (req, res) => {
        const productList = await ProductListService.productListdao.getById(req.params.id);
        if (productList === undefined) {
            return res.status(404).end()
        }
        ProductListService.productListdao.delete(req.params.id)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })
    app.put("/productList", async (req, res) => {
        const productList = req.body
        if ((productList.id === undefined) || (productList.id == null) || (!ProductListService.isValid(productList))) {
            return res.status(400).end()
        }
        if (await ProductListService.productListdao.getById(productList.id) === undefined) {
            return res.status(404).end()
        }
        ProductListService.productListdao.update(productList)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })
}