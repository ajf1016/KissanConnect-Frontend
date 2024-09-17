import React from "react";

function ContractList({ contracts, placeBid }) {
    return (
        <div style={contractsListStyle}>
            <h1>{contracts?.length} Contract available</h1>
            <div style={contractCards}>
                {contracts.map((contract) => (
                    <div key={contract.id} style={contractCardStyle}>
                        <h3>{contract.cropName}</h3>
                        <p>
                            <strong>Buyer:</strong> {contract.buyerName}
                        </p>
                        <p>
                            <strong>Quantity:</strong> {contract.quantity}
                        </p>
                        <p>
                            <strong>Price:</strong> ₹{contract.price}
                        </p>
                        <button
                            onClick={() => placeBid(contract.id)}
                            style={bidButtonStyle}
                        >
                            Place Bid
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

const contractsListStyle = {
    // display: "flex",
    // flexWrap: "wrap",
    // flexDirection: "row",
    // justifyContent: "space-around",
    // padding: "20px",
    width: "70%",
};
const contractCards = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
};

const contractCardStyle = {
    width: "25%",
    padding: "20px",
    margin: "0 15px 15px 0",
    border: "2px solid #FCC013",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

const bidButtonStyle = {
    padding: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

export default ContractList;
