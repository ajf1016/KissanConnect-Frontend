import React, { useState } from "react";

function NewBidForm({ submitBid }) {
    const [newBid, setNewBid] = useState({
        buyerName: "",
        cropName: "",
        quantity: "",
        price: "",
    });

    const handleInputChange = (e) => {
        setNewBid({ ...newBid, [e.target.name]: e.target.value });
    };

    return (
        <form
            style={formStyle}
            onSubmit={(e) => {
                e.preventDefault();
                submitBid(newBid);
            }}
        >
            <h3>Put Up a New Bid</h3>
            <input
                type="text"
                name="buyerName"
                placeholder="Buyer Name"
                value={newBid.buyerName}
                onChange={handleInputChange}
                required
                style={inputStyle}
            />
            <input
                type="text"
                name="cropName"
                placeholder="Crop Name"
                value={newBid.cropName}
                onChange={handleInputChange}
                required
                style={inputStyle}
            />
            <input
                type="text"
                name="quantity"
                placeholder="Quantity"
                value={newBid.quantity}
                onChange={handleInputChange}
                required
                style={inputStyle}
            />
            <input
                type="number"
                name="price"
                placeholder="Price (₹)"
                value={newBid.price}
                onChange={handleInputChange}
                required
                style={inputStyle}
            />
            <button type="submit" style={submitButtonStyle}>
                Submit Bid
            </button>
        </form>
    );
}

const formStyle = {
    padding: "20px",
    // margin: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    width: "23%",
    display: "flex",
    flexDirection: "column",
};

const inputStyle = {
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ddd",
    borderRadius: "5px",
    fontSize: "16px",
};

const submitButtonStyle = {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

export default NewBidForm;
