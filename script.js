// Booking
function submitBooking(e){
    e.preventDefault();
    let id = "FM" + Math.floor(Math.random()*10000);
    localStorage.setItem(id, "🚚 In Transit");

    document.getElementById("msg").innerText =
    "Booking Done! Your Tracking ID: " + id;
}

// Tracking
function trackOrder(){
    let id = document.getElementById("trackId").value;
    let status = localStorage.getItem(id);

    if(status){
        document.getElementById("result").innerText =
        "Status: " + status;
    } else {
        document.getElementById("result").innerText =
        "Invalid Tracking ID";
    }
}