//kriti
const express = require("express");
const router = express.Router();
const redis = require("redis");
const client = redis.createClient();

//most viewed images
router.get("/", async (req, res) => {
    // console.log("I'm Here");
    try {
        const retval = [];
        // example reference: https://github.com/NodeRedis/node_redis
        client.keys('*', async function (err, keys) {
            // console.log("Keys ==> ", keys)
            if (err) return console.log(err);

            for (let i = 0, len = 10; i < len; i++) {
                
                if (keys[i] === undefined) {
                    continue;
                }
                else {
                    client.get(keys[i], function (err, reply) {
                        retval.push(keys[i], reply);
                    })
                }
                // console.log(keys[i]);
            }   
            console.log(retval)
            return res.json({'mostViewed': retval})
        });
    } catch (e) {
        console.log(e)
        res.status(404).json({ message: e });
    }
});

// get imageData with category
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    console.log("id ==> ", id);
    client.exists(id, function(err, reply) {
        if (reply === 1) {
            console.log('exists');
            client.get(id, function(err, reply) {
                console.log("Value is ", reply);
                reply = parseInt(reply,10) + 1;
                client.set(id, reply);
                client.get(id, function(err, reply) {
                    console.log("Value is now ", reply);
                })
            })
        } else {
            console.log('doesn\'t exist');
            client.set(id, 1);
        }
    });
});

module.exports = router;
