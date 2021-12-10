import React, { useState, useEffect } from 'react';
import Randomiser from './Randomiser'


// UTIL //

function _item(item) {
    return parseInt(item.replace('item_', ''))
}

const itemsList = []
for (let i = 0; i < 20; i++) {
    itemsList.push({id: 'item_' + i, value: 'item ' + i})
}

console.log(itemsList)
const intervalTime = 150;
const duration = 50
let intervalId = null

function RandomiserContainer() {

    const [items, setItems] = useState(itemsList);
    const [currentItem, setCurrentItem] = useState(items[Math.floor(Math.random() * items.length)]);
    const [counter, setCounter] = useState(0);
    const [toggleEdit, setToggleEdit] = useState(false)

    const handleTrigger = () => {
        document.getElementById(currentItem.id).classList.remove("chosenOne")
        intervalId = setInterval(() => {
            setCurrentItem(items[Math.floor(Math.random() * items.length)])
        }, intervalTime)
    }

    useEffect(() => {
        document.getElementById(currentItem.id).classList.add("currentItem")
        setCounter(prev => prev += 1)
        console.log(counter)
        if(counter === duration) {
            clearInterval(intervalId)
            setCounter(0)
            document.getElementById(currentItem.id).classList.add("chosenOne")
        }
        return () => {
            document.getElementById(currentItem.id).classList.remove("currentItem")
        }
    }, [currentItem])

    useEffect(() => {
        console.log(document.querySelectorAll('.edit input'))
        document.querySelectorAll('.edit input').forEach(element => {
            element.addEventListener("change", ({target}) => {
                setItems(prev => {
                    let item = items[_item(target.parentElement.parentElement.id)]
                    item.value = target.value
                    prev.splice(_item(item.id), 1, item)
                    console.log(prev)
                    console.log('test')
                    console.log(items)
                    return prev
                })
            })
        });
        return () => {
            document.querySelectorAll('.edit input').forEach(element => {
                element.removeEventListener("change", ({target}) => {
                    console.log(target)
                })
            });        
        }
    }, [items])

    const handleEdit = ({target}) => {
        let classes = [...target.classList]
        let input;
        if (classes.includes('active')) {
            target.classList.remove('active')
        } else {
            target.classList.add('active')
        }   
    }

    const handleChange = ({target}) => {
        console.log(target)
        target.style.color = 'green'
    }

    return (  
        <div className="RandomiserContainer">
            <Randomiser items={items} onEdit={handleEdit} onChange={handleChange}/>
            <button onClick={handleTrigger}>Let's Go !</button>
        </div>
    );
}

export default RandomiserContainer;
