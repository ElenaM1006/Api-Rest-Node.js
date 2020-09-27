const { Router } = require('express');
const router = Router();

//routes
router.get('/test', (req, res) => {
    const data = {
        "name":"Oscar",
        "nickname":"Oscar23"
    };
    res.json(data);
});

module.exports = router;