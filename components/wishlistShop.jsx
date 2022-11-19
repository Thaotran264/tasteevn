import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { BsFillFunnelFill, BsChevronLeft } from "react-icons/bs";
import Link from 'next/link';
import { Col, Row } from 'react-bootstrap';

const dataList = [
    {
        name: "Bún Bò Bắp Hương Xưa",
        slug: "bun-bo-bap-huong-xua",
        image: "https://tastee-pro.s3.ap-southeast-1.amazonaws.com/images/mtzolk4d.eah180220226048.jpg",
        address: '233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.'
    },
    {
        name: "Bún Bò Bắp Hương Xưa",
        slug: "bun-bo-bap-huong-xua",
        image: "https://tastee-pro.s3.ap-southeast-1.amazonaws.com/images/1zo0abcr.xuh091220216016.jpg",
        address: '233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.'
    },
    {
        name: "Bún Bò Bắp Hương Xưa",
        slug: "bun-bo-bap-huong-xua",
        image: "https://tastee-pro.s3.ap-southeast-1.amazonaws.com/images/1zo0abcr.xuh091220216016.jpg",
        address: '233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.'
    },
    {
        name: "Bún Bò Bắp Hương Xưa",
        slug: "bun-bo-bap-huong-xua",
        image: "https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/uahjxkhg.ci108112021105221.jpg",
        address: '233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.'
    },
]
function WishlistShop() {
    return (
        <div className="d-flex flex-column gap-2">
            <div className='d-flex align-items-center p-2 gap-3 bg-success bg-opacity-25'>
                <Link href="/profile">
                    <a className='p-2 hideOnDesktop'>
                        <BsChevronLeft />
                    </a>
                </Link>
                <h6 className="mb-0 w-100 text-center">
                    Danh sách quán yêu thích
                </h6>
                {/* <button className='d-flex justify-content-center align-items-center border-0 bg-light bg-opacity-10'>
                    <BsFillFunnelFill />
                </button> */}
            </div>

            <Row className='mx-0'>
                {
                    dataList.map(data => (
                        <Col xs={6} md={4} className='mb-2'>
                            <Card >
                                <Card.Img variant="top" src={data.image} className='w-100 h-100' />
                                <Card.Body>
                                    <Card.Title className='fs-6 fw-bold'>{data.name}</Card.Title>
                                    <Card.Text style={{fontSize: 13}}>
                                        {data.address}
                                    </Card.Text>
                                    {/* <Button variant="primary">Go somewhere</Button> */}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>

    );
}

export default WishlistShop;