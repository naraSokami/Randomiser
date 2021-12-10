import React, { useState, useEffect } from 'react';
import Randomiser from './Randomiser'


// UTIL //
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

    const handleEdit = ({target}) => {
        let classes = [...target.classList]
        let input;
        if (classes.includes('active')) {
            target.classList.remove('active')
            target.removeChild(target.childNodes[1])
        } else {
            target.classList.add('active')
            input = target.appendChild(document.createElement("Input"))   
            input.addEventListener('change', ({target}) => {
                console.log(target)
                target.style.color = 'green'
                console.log(target.parentElement.parentElement.id)
                setItems(prev => {
                    console.log(target.value)
                    let returnedItem = prev.filter(item => item.id == target.parentElement.parentElement.id)
                    let newArray = prev.filter(item => item.id != target.parentElement.parentElement.id)
                    newArray.push(returnedItem[0])
                    console.log(newArray)

                    //creer un input de base
                })
            })
        }   
        console.log(input)
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
