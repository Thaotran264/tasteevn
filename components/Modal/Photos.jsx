import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
const Photos = ({ data, setShowModal }) => {
    const handleClose = () => {
        setShowModal({ open: !data.open, data: null })
    };
    const [index, setIndex] = useState(data.index);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Modal fullscreen show={data.open} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                        {
                            data.list.map((item, id) =>
                                <Carousel.Item key={id}>
                                    <div style={{width: '100%', height: '80vh'}}>
                                    <Image
                                        className="d-block w-100"
                                        src={item}
                                        alt="First slide"
                                        // width='400'
                                        // height="100%"
                                        layout='fill'
                                        objectFit='cover'
                                    />
                                    </div>
       
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Photos