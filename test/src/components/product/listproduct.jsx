import React, { useState } from 'react';
import Data from './Data';
import '../../components/styles.scss';

const ListProduct = () => {

    const [searchI, setSearchI] = useState("");

    return (
        <>
            <section className="Search">
                <input type="text" className='search-bar' placeholder='Search in here....'
                    onChange={(e) => {
                        setSearchI(e.target.value);
                    }}
                />
                {/* <button className='search-button'>Search</button> */}
            </section>

            <section className="select-filter">
                <h2>Select filter</h2>
                <div className='select-filter main'>
                    <div className='Room-rate-type'>
                        <h3>Room rate type</h3>
                        <input type="checkbox" onClick={(e) => {
                            setSearchI(e.target.value);
                        }} />
                        <label htmlFor="">Room Cheap</label>
                        <input type="checkbox" />
                        <label htmlFor="">Average Room</label>
                        <input type="checkbox" />
                        <label htmlFor="">Expensive Room</label>
                    </div>
                    <div className='Member'>
                        <h3>Member</h3>
                        <input type="checkbox" />
                        <label htmlFor="">1</label>
                        <input type="checkbox" />
                        <label htmlFor="">2</label>
                        <input type="checkbox" />
                        <label htmlFor="">3</label>
                        <input type="checkbox" />
                        <label htmlFor="">4</label>
                        <input type="checkbox" />
                        <label htmlFor="">5</label>
                        <input type="checkbox" />
                        <label htmlFor="">6</label>
                    </div>
                    <div className='Address'>
                        <h3>Address</h3>
                        <input type="checkbox" />
                        <label htmlFor="">District 1</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 3</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 4</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 5</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 6</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 7</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 8</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 10</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 11</label>
                        <input type="checkbox" />
                        <label htmlFor="">District 12</label>
                    </div>
                    <div>
                        <h3>Price</h3>
                    </div>
                </div>
            </section>

            <section className='container'>
                {Data.filter(val => {
                    if (searchI === "") {
                        return val;
                    } else if (val.title.toString().toLowerCase().includes(searchI.toString().toLowerCase()) ||
                        val.address.toString().toLowerCase().includes(searchI.toString().toLowerCase()) ||
                        val.price.toString().toLowerCase().includes(searchI.toString().toLowerCase())) {
                        return val;
                    }
                }).map((item, index) => {
                    return (

                        <div key={index} className="card">
                            <div className="card-img">
                                <img src={item.img} alt="house1" />
                                <ul className="action">
                                    <li>
                                        <i class="fa-regular fa-eye"></i>
                                        <span>Click see more</span>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-plus"></i>
                                        <span>???????</span>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-people-roof"></i>
                                        <span>{item.member}</span>
                                    </li>
                                    <li>
                                        <i class="fa-solid fa-heart"></i>
                                        <span>Like</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="content">
                                <div className="productName">
                                    <h2>{item.title}</h2>
                                    <h3>{item.address}</h3>
                                </div>
                                <div className="price_rating">
                                    <h2>{item.price}</h2>
                                    <div className="rating">
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star-half"></i>
                                        <i class="fa-regular fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </section>
        </>
    )

}

export default ListProduct;

