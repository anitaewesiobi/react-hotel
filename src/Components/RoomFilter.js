import React, {useContext, useState} from 'react'
import {DataContext} from "../Context";
import styled from "styled-components";

function RoomFilter() {
    const {roomData, setTempData} = useContext(DataContext);

    function handleChange(event){
        const { value, name} = event.target;
 
        if (name === "type"){
            setType(value);
            if(value !== "all"){
                let copiedData = [...roomData]
                let filteredType = copiedData.filter(room => room.fields.type === value);
                setTempData(filteredType);
            } else{ setTempData(roomData)}
        }
        if (name === "capacity"){
            setCapacity(value);
                let copiedData = [...roomData]
                let filteredType = copiedData.filter(room => room.fields.capacity >= value);
                setTempData(filteredType);
        }
        if(name === "price"){
            setPrice(value);
            let copiedData = [...roomData]
            let filteredType = copiedData.filter(room => room.fields.price <= value);
            setTempData(filteredType);
        }
        if (name === "breakfast"){
           if (breakfast){
               setBreakfast(false)
               setTempData(roomData)
           } else{
               setBreakfast(true)
               let copiedData = [...roomData]
               let filteredType = copiedData.filter(room => room.fields.breakfast === true);
               setTempData(filteredType);
           }
        }
        if (name === "pets") {
            if (pets){
                setPets(false)
                setTempData(roomData)
            } else{
                setPets(true)
                let copiedData = [...roomData]
                let filteredType = copiedData.filter(room => room.fields.pets === true);
                setTempData(filteredType);
            }
        }
        if(name === "sortHightoLow"){
            if (sortHightoLow){
                setSortHightoLow(false)
                setTempData(roomData)
            } else{
            setSortHightoLow(true)
            let copiedData = [...roomData]
            let filteredType = copiedData.sort(function(a,b){
                let lastPrice = a.fields.price;
                let nextPrice = b.fields.price;
                if (lastPrice > nextPrice) { return -1 }
                else { return 1 }
                })
            setTempData(filteredType);
            }
            
        }

    }
        
    const [sortHightoLow, setSortHightoLow] = useState(false);
    const [type, setType] = useState("all");
    const [capacity, setCapacity] = useState(1);
    const [price, setPrice] = useState(0);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);
    const getUnique = (items, value) =>{
        return [...new Set(items.map(item => item.fields[value]))]
    }
    let types = getUnique(roomData,"type");
    types = [...types, "all"]
    types = types.map((selection, index) => <option value={selection} key={index}>{selection}</option> );
    let people = getUnique(roomData, "capacity");
    people = people.map((selection, index) => <option value={selection} key={index}>{selection}</option>);


    return (
        <FilterWrapper>
            <form>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 mx-3">
                            <label htmlFor="type">Room Type</label>
                            <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>{types}</select>
                    </div>
                    <div className="col-md-2 mx-3">
                            <label htmlFor="capacity">Guests</label>
                            <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>{people}</select>

                    </div>
                    <div className="col-md-2 pt-4">
                        <input type="checkbox" name="sortHightoLow" id="sortHightoLow" checked={sortHightoLow} onChange={handleChange} />
                        <label htmlFor="sortHightoLow" className="ml-1">Price High to Low</label>

                    </div>

                    <div className="col-md-2 pt-4 mx-3">
                            <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                            <label htmlFor="breakfast" className="ml-1">Breakfast</label>

                    </div>
                    <div className="col-md-2 pt-4 mx-3">
                            <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                            <label htmlFor="pets" className="ml-1">Pets</label>

                    </div>

                </div>
            </div>
            </form>
        </FilterWrapper>
    )
}
export const FilterWrapper = styled.div`
.container{
   margin: 0 auto; 
}
font-family: var(--pFont);
`
export default RoomFilter

