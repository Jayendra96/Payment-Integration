let div = document.querySelector(".products");
div.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        var amount = event.target.value;
        let paybutton = event.target;
        var options = {
            "key": "rzp_live_oPoBN9pYrroCnv",
            "amount": amount*100,
            "currency": "INR",
            "name": "Jayendra Prakash",
            "description": "Test Transaction",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkQ2jSs2AaF1eCi7xQPSNSW_tJglCaNtJbJg&usqp=CAU",
            "handler": function (response){
                alert('Payment ID: ' + response.razorpay_payment_id);
            },
            "prefill": {
                "name": "Jayendra Prakash",
                "email": "jayendraprakash733@gmail.com",
                "contact": "8840320539"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };
        var rzp = new Razorpay(options);
        rzp.open();
        console.log(amount);
    }
});