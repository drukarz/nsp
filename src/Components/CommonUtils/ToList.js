import React from "react";

export function toList(items) {
    const listItems = items.map((item, index) =>
        <li key={index}>
            {item}
        </li>
    );
    return (
        <ul>{listItems}</ul>
    );
}