import { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import ContractList from "../ContractList";
import NewBidForm from "../NewBidForm";

const Market = () => {
    const [contracts, setContracts] = useState([
        // Sample data
        {
            id: 1,
            buyerName: "John Doe",
            cropName: "Wheat",
            quantity: "100kg",
            price: "₹1500",
        },
        {
            id: 2,
            buyerName: "Jane Smith",
            cropName: "Rice",
            quantity: "200kg",
            price: "₹2200",
        },
    ]);

    const [filters, setFilters] = useState({
        crop: "all",
        price: 5000,
        location: "",
    });

    const placeBid = (contractId) => {
        console.log(`Bid placed for contract ${contractId}`);
    };

    const submitBid = (newBid) => {
        setContracts([...contracts, { id: contracts.length + 1, ...newBid }]);
    };

    return (
        <div style={appStyle}>
            <Header />
            <div style={contentStyle}>
                {/* <Sidebar filters={filters} setFilters={setFilters} /> */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "space-between",
                        width: "100%",
                        padding: "50px 100px",
                    }}
                >
                    <ContractList contracts={contracts} placeBid={placeBid} />
                    <NewBidForm submitBid={submitBid} />
                </div>
            </div>
        </div>
    );
};

const appStyle = {
    backgroundColor: "#E4FD9C",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "max-content",
};

const contentStyle = {
    display: "flex",
    padding: "20px 0",
    width: "100%",
};

export default Market;
