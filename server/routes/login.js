const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const uuidv4 = require('uuid/v4');
const uData = require('../data/user.js');

const config = require('../config/config.js');
const jwt = require('jsonwebtoken');
const middleware = require('../middleware');


async function checkAuth(username, password) {
    let checkVal = false;
    const userObject = await uData.getUserByEmail(username);

    checkVal = bcrypt.compareSync(password, userObject['password']);

    return checkVal;
};

router.get('/', async (req, res) => {
    res.redirect('/api/user');
});

router.get('/api/user', async (req, res) => {
    let tVal = '';
    let cVal = false;
    console.log("req.cookies",req.cookies);
    if (typeof res.cookie.AuthCookie === undefined) {
        tVal = '403 Error';
        cVal = true;
        console.log(tval);
        return res.redirect('/');
    }
    else {
        tVal = 'Hey there, you are an authenticated user';
        console.log(tVal);
        return res.redirect('/');
    }
});

router.post("/sign-in", async (req, res) => {
    console.log("req.body ==> ", req.body);
    const post = req.body;
    let checkVal = false;

    const uName = post.email;
    const password = post.password;

    try {
        checkVal = await checkAuth(uName, password);

        console.log("checkVal ==> ", checkVal)
    }
    catch (e) {
        console.log(e);
        // return res.redirect(200, '/login', { error: e });
    }

    if (checkVal) {
        let token = jwt.sign({ email: uName }, config.secret, { expiresIn: 129600 });
        console.log('Authenticated', token);
        res.send({
            token: token,
            user: uName
        });
    }
    else
        res.send('Incorrect Username or Password');
});

router.get("/bambi", middleware.checkToken, async (req, res) => {
    res.send('You are authenticated');
});

router.post("/sign-up", async (req, res) => {
    const post = req.body;

    console.log(req.body);
    const { lname, fname, password, email, uname, gender } = req.body;

    const newObject = await uData.createUserObject(lname, fname, password, email, uname, gender);
    res.json(newObject);
});

// router.get("/login", async (req, res) => {
//     return res.redirect('/login');
// });

router.get('/logout', async (req, res) => {
    res.clearCookie('AuthCookie')
    res.redirect('/login');
});

module.exports = router;
