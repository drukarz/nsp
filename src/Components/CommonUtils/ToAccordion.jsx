import {AccordionTab} from "primereact/accordion";
import {toList} from "./ToList";
import React from "react";

export function ToAccordion(items) {

    const listItems = items.map((item) => {

            return(
                <AccordionTab header={item.header} style={{'fontSize': '2.5em'}}>
                    {
                        toList(item.list)
                    }
                </AccordionTab>);
        }
    );

    return listItems;
}