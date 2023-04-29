import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftNav = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch("https://news-portal-server-fozlerabbi1.vercel.app/catagories")
        // fetch("http://localhost:5000/catagories")
            .then(res => res.json())
            .then(data => setDatas(data))
            .catch(err => console.error(err.message))
    }, [])
    // console.log(datas)

    return (
        <div>
            <h4 className="text-start">All catagories</h4>
            <Table hover responsive="sm">
                <tbody>
                    {
                        datas.map(data => <tr key={data.id}>
                            <td > <Link to={`/catagorie/${data.id}`} className="text-decoration-none text-black" > {data.name}</Link> </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default LeftNav;