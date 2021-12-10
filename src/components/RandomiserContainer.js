import React, { useReducer, useState } from 'react';
// import Randomiser from './Randomiser'


// UTIL //

// function _item(item) {
//     return parseInt(item.replace('item_', ''))
// }

const itemsList = []
for (let i = 0; i < 20; i++) {
    itemsList.push({ id: 'item_' + i, value: 'item ' + i, active: false, change: false })
}

// console.log(itemsList)
// const intervalTime = 150;
// const duration = 50
// let intervalId = null

function RandomiserContainer() {
    const [items, setItems] = useState(itemsList);
    const [input, setInput] = useState("");
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    // useEffect(() => {
    //     document.getElementById(currentItem.id).classList.add("currentItem")
    //     setCounter(prev => prev += 1)
    //     console.log(counter)
    //     if (counter === duration) {
    //         clearInterval(intervalId)
    //         setCounter(0)
    //         document.getElementById(currentItem.id).classList.add("chosenOne")
    //     }
    //     return () => {
    //         document.getElementById(currentItem.id).classList.remove("currentItem")
    //     }
    // }, [currentItem])

    // useEffect(() => {
    //     document.querySelectorAll('.edit input').forEach(element => {
    //         element.addEventListener("change", ({ target }) => {
    //             setItems(prev => {
    //                 let item = items[_item(target.parentElement.parentElement.id)]
    //                 item.value = target.value
    //                 prev.splice(_item(item.id), 1, item)
    //                 console.log(prev)
    //                 console.log('test')
    //                 console.log(items)
    //                 return prev
    //             })
    //         })
    //     });
    //     return () => {
    //         document.querySelectorAll('.edit input').forEach(element => {
    //             element.removeEventListener("change", ({ target }) => {
    //                 console.log(target)
    //             })
    //         });
    //     }
    // }, [items])

    const handleTrigger = () => {
        let liste = [...items]
        for (let a = 0; a < 40; a++) {
            setTimeout(() => {
                let random = Math.floor(Math.random() * liste.length)
                for (let b = 0; b < liste.length; b++) {
                    liste[b].change = false
                }
                liste[random].change = true
                setItems(liste)
                forceUpdate();
                console.log(items);
            }, parseInt(a) + "000");
        }
    }


    const handleChangeInput = (event) => {
        setInput(event.target.value)
    }

    const newElement = (event, i) => {
        if (event.key === "Enter") {
            let newItem = [...items];
            newItem[i].value = input;

            setItems(newItem)
            setInput("");
        }
    }

    const handleEdit = ({target}) => {
        let classes = [...target.classList]
        let input;
        if (classes.includes('active')) {
            target.classList.remove('active')
        } else {
            target.classList.add('active')
        }   
    }

    return (
        <div className="RandomiserContainer">
            {items.map((e, i) => {
                return (
                    <div key={i} className="Randomiser">
                        <div className={`item ${e.change === true ? "bg-green" : ""}`} id={e.id}>
                            <p>{e.value}</p>
                            <div className={`edit`} onClick={handleEdit}>
                                <i className="fas fa-marker"></i>
                                <input type="text" value={input} onChange={handleChangeInput} onKeyPress={(event) => newElement(event, i)} />
                            </div>
                        </div>
                    </div>
                )
            })}
            <button onClick={handleTrigger}>Let's Go !</button>
        </div>
    );
}

export default RandomiserContainer;
