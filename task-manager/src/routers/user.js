const express = require('express');
const { update } = require('../models/user');
const User  = require('../models/user');
const router = new express.Router();
const auth = require('../middleware/auth');

// Register New User Route
router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        const token = await user.generateAuthToken()

        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});


// Login Route
router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        const token = await user.generateAuthToken();

        res.send({ user, token });

    } catch(e) {
        res.status(400).send();
    }
});

// Logout Route
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => {
            return token.token !== req.token;
        });

        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

// Logout All Route
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];

        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

// Get User Profile Route
router.get('/users/me', auth, async (req, res) => {
    res.send(req.user);
});

// Update User Route
router.patch('/users/me', auth, async (req, res) => {

    
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update));
    
    if (!isValidOperation) {
        return res.status(404).send({ error: 'Invalid Updates!' });
    }

    try {
        
        updates.forEach((update) => req.user[update] = req.body[update]);

        await req.user.save();
        res.send(req.user);

    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
});

// Delete User Route
router.delete('/users/me', auth, async (req, res) => {

    try {
        await req.user.remove()
        res.send(req.user);

    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;