import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { isMobile } from "react-device-detect";
import { useRouter } from "next/router";
import { BsFillFunnelFill, BsChevronLeft } from "react-icons/bs";

function WishlistShop() {
    const [_isMobile, setMobile] = useState(false);
    const router = useRouter();
  useEffect(() => {
    setMobile(isMobile);
  }, [_isMobile]);
    return (
        <div className="profile-mobile custom-card-hover">
        { _isMobile && 
            <Card className="">
                <Card.Body>
                    <div className="d-flex gap-3 text-center ">
                        <a href="/profile">
                            <div>
                                <BsChevronLeft />
                            </div>
                        </a>
                        <span className="w-100">
                            Danh sách quán yêu thích
                        </span>
                        {/* <a href=''>
                        <BsFillFunnelFill />
                        </a> */}
                    </div>
                </Card.Body>
            </Card>
        }

        <div className={ _isMobile ?  'row m-2' : 'row'   }>
            <div className="col-6 col-md-3 p-1">
                <Card className="w-100 rounded">
                    <Card.Img variant="top" src="https://tastee-pro.s3.ap-southeast-1.amazonaws.com/images/mtzolk4d.eah180220226048.jpg" />
                    <Card.Body>
                        <Card.Title>Bún Bò Bắp Hương Xưa</Card.Title>
                        <Card.Text>
                            233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>

            <div className="col-6 col-md-3 p-1">
                <Card className="w-100 rounded">
                    <Card.Img variant="top" src="https://tastee-pro.s3.ap-southeast-1.amazonaws.com/images/k0fkwps0.3lb02122021912.jpg" />
                    <Card.Body>
                        <Card.Title>Bún Bò Bắp Hương Xưa</Card.Title>
                        <Card.Text>
                            233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>

            <div className="col-6 col-md-3 p-1">
                <Card className="w-100 rounded">
                    <Card.Img variant="top" src="https://tastee-pro.s3.ap-southeast-1.amazonaws.com/images/1zo0abcr.xuh091220216016.jpg" />
                    <Card.Body>
                        <Card.Title>Bún Bò Bắp Hương Xưa</Card.Title>
                        <Card.Text>
                            233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>

            <div className="col-6 col-md-3 p-1">
                <Card className="w-100 rounded">
                    <Card.Img variant="top" src="https://tastee-test.s3.ap-southeast-1.amazonaws.com/images/uahjxkhg.ci108112021105221.jpg" />
                    <Card.Body>
                        <Card.Title>Bún Bò Bắp Hương Xưa</Card.Title>
                        <Card.Text>
                            233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>

            <div className="col-6 col-md-3 p-1">
                <Card className="w-100 rounded">
                    <Card.Img variant="top" src="https://tastee-pro.s3.ap-southeast-1.amazonaws.com/images/mtzolk4d.eah180220226048.jpg" />
                    <Card.Body>
                        <Card.Title>Bún Bò Bắp Hương Xưa</Card.Title>
                        <Card.Text>
                            233 Nguyễn Văn Luông, P11, Quận 6, Tp Hồ Chí Minh.
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </div>
           
        </div>
        </div>

    );
}

export default WishlistShop;