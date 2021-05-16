const paystack = (request) => {
    const MySecretKey = "Bearer sk_test_0c0e5e880650757bd78931d16c83b979dba96d75";

    const initializePayment = (form, mycallback) => {
        const options = {
            url : 'http://api.paystagck.co/transcation/initialize',
            headers : {
                authorization : MySecretKey,
                'content-type' : 'application/json',
                'cache-control' : 'co-cache'
            },
            form
        }
        const callback = (error, response, body) => {
            return mycallback(error, body);
        }
        request.post(options, callback);
    }
    const verifyPayment = (ref, mycallback) => {
        const option = {
            url : 'https://api.paystack.co/transcation/verify' + encodeURIComponent(ref),
            headers : {
                authorization : MySecretKey,
                'constet-type' : 'application/json',
                'cache-control' : 'no-cache'
            }
        }

        const callback = (error, response, body) => {
            return mycallback(error, body);
        }
        request(option, callback);
    }
    return (initializePayment, verifyPayment);
}

module.exports = paystack