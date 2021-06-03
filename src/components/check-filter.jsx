import * as React from "react"
import {
  filter,
  summary,
  filterOptions,
  clearButton,
  selectedLabel,
  checkbox,
} from "./check-filter.module.css"

export function CheckFilter({
  items,
  name,
  selectedItems = [],
  setSelectedItems,
  open = true,
}) {
  const toggleItem = ({ currentTarget: input }) => {
    if (input.checked) {
      setSelectedItems([...selectedItems, input.value])
    } else {
      const idx = selectedItems.indexOf(input.value)
      if (idx === -1) {
        return
      }
      const newItems = [
        ...selectedItems.slice(0, idx),
        ...selectedItems.slice(idx + 1),
      ]
      setSelectedItems(newItems)
    }
  }

  const clearItems = () => {
    setSelectedItems([])
  }

  return (
    <details open={open} className={filter} style={{width:'10vw', height:'100vh', overflowX :'hidden', border:'0px solid red'}}>
      {name && (
        <summary>
          <div className={summary}>
            {name}{" "}
            {selectedItems.length ? (
              <button className={clearButton} onClick={clearItems}>
                Clear
              </button>
            ) : undefined}
          </div>
        </summary>
      )}
      <div className={filterOptions} style={{width:'10vw', height:'100vh', overflow:'visible', border:'0px solid yellow'}}>
        {items.map((item) => (
          <label
            className={selectedItems.includes(item) ? selectedLabel : undefined}
            key={item}
          >
            <input
              type="checkbox"
              className={checkbox}
              onChange={toggleItem}
              value={item}
              checked={selectedItems.includes(item)}
            />{" "}
            {item || "None"}
          </label>
        ))}
      </div>
    </details>
  )
}
