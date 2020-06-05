module.exports = (app, ProductService) => {
    app.get("/product", async (req, res) => {
        res.json(await ProductService.productdao.getAll())
    })
    app.get("/product/:id", async (req, res) => {
        try {
            const product = await ProductService.productdao.getById(req.params.id)
            if (product === undefined) {
                return res.status(404).end()
            }
            return res.json(product)
        } catch (e) { res.status(400).end() }
    })
    app.post("/product", (req, res) => {
        const product = req.body
        if (!ProductService.isValid(product))  {
            return res.status(400).end()
        }
        ProductService.productdao.insert(product)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })
    app.delete("/product/:id", async (req, res) => {
        const product = await ProductService.productdao.getById(req.params.id);
        if (product === undefined) {
            return res.status(404).end()
        }
        ProductService.productdao.delete(req.params.id)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })
    app.put("/product", async (req, res) => {
        const product = req.body
        if ((product.id === undefined) || (product.id == null) || (!ProductService.isValid(product))) {
            return res.status(400).end()
        }
        if (await ProductService.productdao.getById(product.id) === undefined) {
            return res.status(404).end()
        }
        ProductService.productdao.update(product)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e)
                res.status(500).end()
            })
    })
}