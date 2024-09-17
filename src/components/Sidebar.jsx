import React from "react";

function Sidebar({ filters, setFilters }) {
    return (
        <aside style={sidebarStyle}>
            <h3>Filters</h3>
            <div>
                <label>Crop Type</label>
                <select
                    onChange={(e) =>
                        setFilters({ ...filters, crop: e.target.value })
                    }
                >
                    <option value="all">All</option>
                    <option value="wheat">Wheat</option>
                    <option value="rice">Rice</option>
                    <option value="corn">Corn</option>
                    {/* Add more crops */}
                </select>
            </div>
            <div>
                <label>Price Range</label>
                <input
                    type="range"
                    min="100"
                    max="5000"
                    onChange={(e) =>
                        setFilters({ ...filters, price: e.target.value })
                    }
                />
                <span>{filters.price}</span>
            </div>
            <div>
                <label>Location</label>
                <input
                    type="text"
                    placeholder="Enter location"
                    onChange={(e) =>
                        setFilters({ ...filters, location: e.target.value })
                    }
                />
            </div>
        </aside>
    );
}

const sidebarStyle = {
    width: "250px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
};

export default Sidebar;
