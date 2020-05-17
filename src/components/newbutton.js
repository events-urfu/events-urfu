import Tab from "../script";
import React from "react";

const NewButton = () => {
    return (
        <div className="block-week-month-date">
            <button className="nav active" data-target="tab-1" onClick={Tab}>неделя</button>
            <button className="nav" data-target="tab-2" onClick={Tab}>месяц</button>
        </div>
    )
}

export default NewButton;