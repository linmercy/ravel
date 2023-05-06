import React, {useEffect} from 'react'
import './main.css'
import img from './images/img.jpg'
import beach from './images/beach.jpg'
import elephants from './images/elephants.jpg'
import giraffe from './images/giraffe.jpg'
import hells from './images/hells.jpg'
import mara from './images/mara.jpg'
import zebra from './images/zebra.jpg'
import { GrLocation } from 'react-icons/gr'
import { FaClipboardCheck } from 'react-icons/fa'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
    {
        id: 1, 
        imgSrc: beach, 
        destTitle: 'Diani', 
        location: 'Malindi, KENYA',
        grade: 'Beach',
        fees: '$234',
        description: "Silky white sands, warm turquoise waters and palm-lined streets; Diani is the sliver of paradise marking the border where the African continent meets the vast Indian Ocean. A beautiful tropical beach retreat, it's often added at the end of a safari in Kenya for a few days' relaxation."
    },

    {
        id: 2, 
        imgSrc: img, 
        destTitle: 'Nairobi National Park', 
        location: 'Nairobi, KENYA',
        grade: 'National Park',
        fees: 'ksh 10,000',
        description: '“The World\'s only Wildlife Capital” \nWide open grass plains and backdrop of the city scrapers, scattered acacia bush play host to a wide variety of wildlife including the endangered black rhino, lions, leopards, cheetahs, hyenas, buffaloes, giraffes and diverse birdlife with over 400 species recorded.'
    },

    {
        id: 3, 
        imgSrc: zebra, 
        destTitle: 'Amboseli National Park', 
        location: 'KENYA',
        grade: 'National Park',
        fees: 'ksh 9,000',
        description: '“Home of the African Elephant” \nCrowned by Mount Kilimanjaro, Africa\'s highest peak, the Amboseli National Parks is one of Kenya\'s most popular parks. The name "Amboseli" comes from a Maasai word meaning "salty dust", and it is one of the best places in Africa to view large herds of elephants up close.'
    },

    {
        id: 4, 
        imgSrc: mara, 
        destTitle: 'Masai Mara National Park', 
        location: 'KENYA',
        grade: 'National Park',
        fees: 'ksh 9,800',
        description: "Masai Mara National Reserve is located in south west Kenya and is a vast scenic expanse of gently rolling African savannah plains measuring 1510 square kilometers in area and bordering the Serengeti National Park in Tanzania to the south."
    },

    {
        id: 5, 
        imgSrc: elephants, 
        destTitle: 'Tsavo East National Park', 
        location: 'Tsavo, KENYA',
        grade: 'National Park',
        fees: 'ksh 8,000',
        description: "Tsavo East National Park is a national park in Kenya with an area of 13,747 km2 (5,308 sq mi). It was established in April 1948 and covers a semi-arid area previously known as the Taru Desert. Together with the Tsavo West National Park, it forms an area of about 22,000 square kilometers."
    },

    {
        id: 6, 
        imgSrc: hells, 
        destTitle: 'Hells Gate National Park', 
        location: 'Naivasha, KENYA',
        grade: 'National Park',
        fees: 'ksh 4,000',
        description: "Hell's Gate National Park is a park located between Lake Naivasha and the Longonot and Suswa volcanoes. It is covered by ashes from the Longonot eruption which occurred 100 years ago, the park is famous for its geothermal station, Lower Gorge and spectacular sceneries (cliffs, volcanoes gorges, geothermal steam)."
    },

    {
        id: 7, 
        imgSrc: giraffe, 
        destTitle: 'Giraffe Center', 
        location: 'Nairobi, KENYA',
        grade: 'Nature Reserve',
        fees: '$234',
        description: "The Giraffe Centre is located in Lang'ata, approximately 20 kilometres (12 mi) from the centre of Nairobi, Kenya. It was established in order to protect the vulnerable giraffe, that is found only in the grasslands of East Africa."
    }
]

const Main = () => {
    //add scroll animation
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <section className="main container section">
            <div data-aos="fade-up" className="secTitle">
                <h3 className="title">
                    Top Destinations
                </h3>
            </div>

            <div className="secContent grid">
                {/* using map api*/}
                {
                    Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
                        return (  
                            
                            <div key={id} data-aos="fade-up" className="singleDestination">
                                {/* return id */}
                            
                                <div className="imageDiv">
                                    <img src={imgSrc} alt={destTitle} />
                                </div>
                                
                                <div className="cardInfo">
                                    <h4 className="destTitle">
                                        {destTitle}
                                    </h4>
                                    <span className="location flex">
                                        <GrLocation className='icon' />
                                        <span className="name">
                                            {location}
                                        </span>
                                    </span>

                                    <div className="fees flex">
                                        <div className="grade">
                                            <span>
                                                {grade}
                                                <small>+1</small>
                                            </span>
                                        </div>
                                        <div className="price">
                                            <h5>
                                                {fees}
                                            </h5>
                                        </div>
                                    </div>

                                    <div className="description">
                                        <p>
                                            {description}
                                        </p>
                                    </div>

                                    <button className='btn flex'>
                                        DETAILS <FaClipboardCheck className='icon' />
                                    </button>
                                </div>
                            </div>
                            
                        
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Main