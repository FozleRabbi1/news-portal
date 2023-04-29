import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const News = () => {
    const newsLoaderData = useLoaderData();
    console.log(newsLoaderData)
    return (
        <Card className=" text-start mb-4">
            <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src={newsLoaderData.image_url} />
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    {
                        newsLoaderData.details
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
                <Link to={`/catagorie/${newsLoaderData.category_id}`} > <Button> <FaArrowLeft></FaArrowLeft> All news catagory</Button> </Link>
            </Card.Footer>
        </Card>
    );
};

export default News;