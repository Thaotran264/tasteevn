import React from 'react'
import Image from 'next/image'
import { BsPlusLg } from 'react-icons/bs'
const Menu = () => {
    return (
        <div className="container py-2">
            {/* Menu 2 */}
            <div className="row gx-5">
                <h4>Menu</h4>
                <div className="col-4">
                    <ul className="list-group w-100">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div className="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                   <div className='d-flex gap-2'>
                    <div style={{width: 200, height: 200}}>
                        <img className='w-100 h-100 d-block img-thumbnail' src='https://images.pexels.com/photos/1448721/pexels-photo-1448721.jpeg?auto=compress&cs=tinysrgb&h=566.525&fit=crop&w=633.175&dpr=2' alt='' />
                    </div>
                    <div className='flex-fill d-flex justify-content-between align-self-start align-items-center gap-3'>
                        <h4>Name of food</h4>
                            <span className='ms-auto'>$15</span>
                        <div className=''>
                            <button className='btn btn-danger'>+</button>
                        </div>
                    </div>
                   </div>
                   <hr />
                   <div className='d-flex gap-2'>
                    <div style={{width: 200, height: 200}}>
                        <img className='w-100 h-100 d-block img-thumbnail' src='https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    </div>
                    <div className='flex-fill d-flex justify-content-between align-self-start align-items-center gap-3'>
                        <h4>Name of food</h4>
                            <span className='ms-auto'>$15</span>
                        <div className=''>
                            <button className='btn btn-danger'>+</button>
                        </div>
                    </div>
                   </div>
                   <hr />
                   <div className='d-flex gap-2'>
                    <div style={{width: 200, height: 200}}>
                        <img className='w-100 h-100 d-block img-thumbnail' src='https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='' />
                    </div>
                    <div className='flex-fill d-flex justify-content-between align-self-start align-items-center gap-3'>
                        <h4>Name of food</h4>
                            <span className='ms-auto'>$15</span>
                        <div className=''>
                            <button className='btn btn-danger'>+</button>
                        </div>
                    </div>
                   </div>
                   <hr />
                   
                </div>
            </div>
            {/* Menu 2 */}
            <div className="row gx-5">
                <h4>Menu</h4>
                <div className="col-4">
                    <ul className="list-group w-100">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div className="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                    <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 5 }}>
                        <div className="card" >
                            <Image height={480} width={800} src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>

                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu 3 */}
            <div className="row gx-5">
                <h4>Menu</h4>
                <div className="col-4">
                    <ul className="list-group w-100">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div className="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                    <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
                        <div className="card" >
                            <Image height={480} width={800} src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>

                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu 4 */}
            <div className="row gx-5">
                <h4>Menu</h4>
                <div className="col-4">
                    <ul className="list-group w-100">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div className="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                    <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
                        <div className="card" >
                            <Image height={480} width={800} src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>

                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu 5 */}
            <div className="row gx-5">
                <h4>Menu</h4>
                <div className="col-4">
                    <ul className="list-group w-100">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                        <li className="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div className="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                    <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 5 }}>
                        <div className="card" >
                            <Image height={480} width={800} src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>

                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div className="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1600" className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Card titleCard titleCard titleCard title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                                <span className="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" className="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu