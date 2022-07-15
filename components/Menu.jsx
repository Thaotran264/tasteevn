import React from 'react'
import Image from 'next/image'
import { BsPlusLg } from 'react-icons/bs'
const Menu = () => {
    return (
        <div class="container">
            {/* Menu 2 */}
            <div class="row gx-5">
                <h4>Menu</h4>
                <div class="col-4">
                    <ul class="list-group w-100">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div class="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                   
                    <div className='row py-3 border-bottom justify-content-between'>
                        <div className='col-2 d-flex align-items-center'>
                            <Image src='https://images.pexels.com/photos/2318966/pexels-photo-2318966.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' width={100} height={100} style={{ objectFit: 'cover' }} />
                        </div>
                        <div className='menuItemInfo col-7'>
                            <a><h4>Pate bơ béo (400gram)</h4></a>
                            <p>Hộp đã được nâng cấp lên từ 300->400 gram vẫn nguyên giá cux</p>
                        </div>
                        <div className='menuItemPrice col-3 d-flex align-items-start'>
                            <span className='ms-auto me-2 fs-6'>85.000 đ</span>
                            <button className='btn btn-danger'><BsPlusLg /></button>
                        </div>
                    </div>
                    <div className='row py-3 border-bottom justify-content-between'>
                        <div className='col-2 d-flex align-items-center'>
                            <Image src='https://images.pexels.com/photos/8471703/pexels-photo-8471703.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width={100} height={100} style={{ objectFit: 'cover' }} />
                        </div>
                        <div className='menuItemInfo col-7'>
                            <a><h4>Pate bơ béo (400gram)</h4></a>
                            <p>Hộp đã được nâng cấp lên từ 300->400 gram vẫn nguyên giá cux</p>
                        </div>
                        <div className='menuItemPrice col-3 d-flex align-items-start'>
                            <span className='ms-auto me-2 fs-6'>85.000 đ</span>
                            <button className='btn btn-danger'><BsPlusLg /></button>
                        </div>
                    </div>
                    <div className='row py-3 border-bottom justify-content-between'>
                        <div className='col-2 d-flex align-items-center'>
                            <Image src='https://images.pexels.com/photos/239581/pexels-photo-239581.jpeg?auto=compress&cs=tinysrgb&w=1600' width={150} height={100} style={{ width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className='menuItemInfo col-7'>
                            <a><h4>Pate bơ béo (400gram)</h4></a>
                            <p>Hộp đã được nâng cấp lên từ 300->400 gram vẫn nguyên giá cux</p>
                        </div>
                        <div className='menuItemPrice col-3 d-flex align-items-start'>
                            <span className='ms-auto me-2 fs-6'>85.000 đ</span>
                            <button className='btn btn-danger'><BsPlusLg /></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu 2 */}
            <div class="row gx-5">
                <h4>Menu</h4>
                <div class="col-4">
                    <ul class="list-group w-100">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div class="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                    <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 5 }}>
                        <div class="card" >
                            <Image height={480} width={800} src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>

                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu 3 */}
            <div class="row gx-5">
                <h4>Menu</h4>
                <div class="col-4">
                    <ul class="list-group w-100">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div class="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                    <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 5 }}>
                        <div class="card" >
                            <Image height={480} width={800} src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>

                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu 4 */}
            <div class="row gx-5">
                <h4>Menu</h4>
                <div class="col-4">
                    <ul class="list-group w-100">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div class="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                    <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 5 }}>
                        <div class="card" >
                            <Image height={480} width={800} src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>

                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Menu 5 */}
            <div class="row gx-5">
                <h4>Menu</h4>
                <div class="col-4">
                    <ul class="list-group w-100">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                        <li class="list-group-item">A fourth item</li>
                        <li class="list-group-item">And a fifth one</li>
                    </ul>
                </div>
                <div class="col-8 py-2 bg-white">
                    <h4>Menu</h4>
                    <div className='' style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 5 }}>
                        <div class="card" >
                            <Image height={480} width={800} src="https://images.pexels.com/photos/6287495/pexels-photo-6287495.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/461428/pexels-photo-461428.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/1660030/pexels-photo-1660030.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>

                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/326279/pexels-photo-326279.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                        <div class="card">
                            <Image height={480} width={800} src="https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg?auto=compress&cs=tinysrgb&w=1600" class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title">Card titleCard titleCard titleCard title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <span class="text-danger d-inline-block mb-1">85.000 đ</span><br />
                                <button type="button" class="btn btn-danger w-100"><BsPlusLg /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Menu