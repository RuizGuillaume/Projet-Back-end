module.exports = (app, service) => {
    app.get("/listProduct", async (req, res) => {
        res.json(await service.listProductdao.getAll())
    });
    app.get("/listProduct/:id", async (req, res) => {
        try {
            const listProduct = await service.listProductdao.getById(req.params.id);
            if (listProduct === undefined) {
                return res.status(404).end()
            }
            return res.json(listProduct)
        } catch (e) { res.status(400).end() }
    });
    app.post("/listProduct", (req, res) => {
        const listProduct = req.body;
        if (!service.isValid(listProduct))  {
            return res.status(400).end()
        }
        service.listProductdao.insert(listProduct)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e);
                res.status(500).end()
            })
    });
    app.delete("/listProduct/:id", async (req, res) => {
        const listProduct = await service.listProductdao.getById(req.params.id);
        if (listProduct === undefined) {
            return res.status(404).end()
        }
        service.listProductdao.delete(req.params.id)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e);
                res.status(500).end()
            })
    });
    app.put("/listProduct", async (req, res) => {
        const listProduct = req.body;
        if ((listProduct.id === undefined) || (listProduct.id == null) || (!service.isValid(listProduct))) {
            return res.status(400).end()
        }
        if (await service.listProductdao.getById(listProduct.id) === undefined) {
            return res.status(404).end()
        }
        service.listProductdao.update(listProduct)
            .then(res.status(200).end())
            .catch(e => {
                console.log(e);
                res.status(500).end()
            })
    })
};