// import { useState } from "react";
import { Card } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData } from "react-router-dom";


const CataDitles = () => {
    // const [sliceData, setSliceData] = useState(false)
    // const { id } = useParams();
    const cataData = useLoaderData();
    console.log(cataData);

    // const readMoreFun = (id) =>{
    //     setSliceData(!sliceData);

    // }

    return (
        <div>
            {/* <h2>selected item id is {id} </h2> */}
            {/* <Card.Img variant="top" src={data.image_url} /> */}
            {
                cataData.length === 0 && <h2>news not available</h2> 
            }

            {
                cataData && cataData.map(data => {
                    return <Card key={data._id} className=" text-start mb-4">
                        <Card.Header>Featured</Card.Header>
                        <Card.Img variant="top" src={data.image_url} />
                        <Card.Body>
                            <Card.Title>Special title treatment</Card.Title>
                            <Card.Text>

                                {
                                    data.details > 200 ? data.details : data.details.slice(0, 200)
                                }
                                {/* {
                                  sliceData ? data.details : data.details.slice(0,200)
                                } */}

                                <Link to={`/news/${data._id}`} className="d-block border-0 " >read more</Link>
                                {/* <button className="d-block border-0 " onClick={()=>setSliceData(!sliceData)} >read more</button> */}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted d-flex">
                            <div className=" flex-grow-1 ">
                                {
                                    <p>
                                        <Rating
                                            placeholderRating={data.rating.number}
                                            emptySymbol={ <FaRegStar></FaRegStar> }
                                            placeholderSymbol={ <FaStar className="text-warning"></FaStar> }
                                            fullSymbol={ <FaStar></FaStar> }
                                        ></Rating>

                                        <span className="ps-1">{data.rating.number}</span> </p>
                                }
                            </div>
                            <div className="">
                                <p>see</p>
                            </div>
                        </Card.Footer>
                    </Card>
                })
            }

        </div>
    );
};

export default CataDitles;