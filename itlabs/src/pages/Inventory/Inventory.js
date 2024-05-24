import { Link } from "react-router-dom";
import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Inventory.module.css";
import React, { useState } from 'react';
import { Modal } from "../../components/Modal/Modal";
import { Header } from "../../components/Header/Header";


export const Inventory = () => {


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        console.log('Search term:', searchTerm);
    };

    

    return (
        <div className={styles.inventory}>
            <Navigation />

            <Header title="Inventory" />

            <div className={styles.inputsearchcontainer}>

                <div className={styles.searchicon}><img src="/img/Search.png" alt="search" /></div>

                <input type="text" placeholder="Search Categories" className={styles.insidesearch} />
            </div>


            <div className={styles.buttonaddcategory}>
                <div className={styles.imageaddcategory}><img src="\img\Add New.png" alt="addnew" /></div>

                <button className={styles.addcategory}><span className={styles.text}>ADD CATEGORY</span><Modal />

                </button>
            </div>

            {/* Vtor del  */}

            <div className={styles.fourparagraphs}>

                <div className={styles.catgoriesnumber}>
                    <p>Categories: 4</p>
                </div>

                <div className={styles.itemsnumber}>
                    <p>Items: 11</p>
                </div>


                <div className={styles.ordersnumber}>
                    <p>Total Orders: 25</p>
                </div>

                <div className={styles.totalcostnumber}>
                    <p>Total Cost: €1.250k</p>
                </div>

            </div>

            {/* Od strana kopcinja -2 */}

            <div className={styles.controlpanel}>
                <div className={styles.imgcontrolpanel}><img src="\img\Control Panel.png" alt="control panel" /></div>

                <button className={styles.buttoncontrolpanel}></button>
            </div>

            <div className={styles.list}>
                <div className={styles.imglist}> <Link to="inventorysecondpage"> <img src="\img\List.png" alt="list" /> </Link> </div>

                <button className={styles.buttonlist}></button>
            </div>




            {/* Tret del - naracki so sliki */}

            <div className={styles.inventoryboxes}>
                <div className={styles.firstfourorders}>


                    <div className={styles.firstinventorybox}>

                        <div className={styles.threeimgbox}>
                            <div className={styles.img1}>
                                <img src="\img\Recent item 2 img (8).png" alt="recentitems2img8" className={styles.imginside1} /></div>
                            <div className={styles.img2}>
                                <img src="\img\Recent item 2 img (9).png" alt="recentitems2img9" className={styles.imginside2} /></div>
                            <div className={styles.img3}>
                                <img src="\img\Recent item 2 img (10).png" alt="recentitems2img10" className={styles.imginside3} /></div>

                        </div>

                        <div className={styles.officesupply}><Link to="inventoryofficesupliesfirstpage" className={styles.link}><span>Office Supply</span></Link></div>
                        <div className={styles.items3}>3 Items | € 338.00</div>
                        <div className={styles.updateofficesupply}>Updated At: 10/10/2023 20:10</div>
                        <div className={styles.imgft}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>



                    </div>

                    <div className={styles.secondinventorybox}>

                        <div className={styles.threeimgboxsecond}>
                            <div className={styles.img1second}>
                                <img src="\img\Recent item 2 img (11).png" alt="recentitems2img11" className={styles.imginside1second} /></div>
                            <div className={styles.img2second}>
                                <img src="\img\Recent item 2 img (12).png" alt="recentitems2img12" className={styles.imginside2second} /></div>
                            <div className={styles.img3second}>
                                <img src="\img\Recent item 2 img (13).png" alt="recentitems2img13" className={styles.imginside3second} /></div>

                        </div>

                        <div className={styles.kitchensupply}>Kitchen Supply</div>
                        <div className={styles.items3second}>3 Items | € 114.00</div>
                        <div className={styles.updatekitchensupply}>Updated At: 10/10/2023 20:10</div>
                        <div className={styles.imgftsecond}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrashsecond} /></div>



                    </div>

                    <div className={styles.thirdinventorybox}>

                        <div className={styles.threeimgboxthird}>
                            <div className={styles.img1third}>
                                <img src="\img\Recent item 2 img (14).png" alt="recentitems2img1" className={styles.imginside1third} /></div>
                            <div className={styles.img2third}>
                                <img src="\img\Recent item 2 img (15).png" alt="recentitems2img15" className={styles.imginside2third} /></div>

                        </div>

                        <div className={styles.sanitarysupply}>Sanitary Supply</div>
                        <div className={styles.items3third}>2 Items | € 98.00</div>
                        <div className={styles.updatesanitarysupply}>Updated At: 10/10/2023 20:10</div>
                        <div className={styles.imgfthird}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrashthird} /></div>

                    </div>

                    <div className={styles.fourthtinventorybox}>

                        <div className={styles.threeimgboxfourth}>
                            <div className={styles.img1fourth}>
                                <img src="\img\Recent item 2 img (8).png" alt="recentitems2img8" className={styles.imginside1fourth} /></div>
                            <div className={styles.img2fourth}>
                                <img src="\img\Recent item 2 img (9).png" alt="recentitems2img9" className={styles.imginside2fourth} /></div>
                            <div className={styles.img3fourth}>
                                <img src="\img\Recent item 2 img (10).png" alt="recentitems2img10" className={styles.imginside3fourth} /></div>

                        </div>

                        <div className={styles.officesupplyfourth}>Office Supply</div>
                        <div className={styles.items3fourth}>3 Items | € 338.00</div>
                        <div className={styles.updateofficesupplyfourth}>Updated At: 10/10/2023 20:10</div>
                        <div className={styles.imgftfourth}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrashfourth} /></div>



                    </div>

                </div>
            </div>

            {/* Dolen red kocki  */}
            <div className={styles.secondfourorders}>
                <div className={styles.fifthinventorybox}>

                    <div className={styles.threeimgbox}>
                        <div className={styles.img1}>
                            <img src="\img\Recent item 2 img (8).png" alt="recentitems2img8" className={styles.imginside1} /></div>
                        <div className={styles.img2}>
                            <img src="\img\Recent item 2 img (9).png" alt="recentitems2img9" className={styles.imginside2} /></div>
                        <div className={styles.img3}>
                            <img src="\img\Recent item 2 img (10).png" alt="recentitems2img10" className={styles.imginside3} /></div>

                    </div>

                    <div className={styles.officesupply}>Office Supply</div>
                    <div className={styles.items3}>3 Items | € 338.00</div>
                    <div className={styles.updateofficesupply}>Updated At: 10/10/2023 20:10</div>
                    <div className={styles.imgft}>
                        <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>

                </div>

                <div className={styles.sixinventorybox}>

                    <div className={styles.threeimgboxsecond}>
                        <div className={styles.img1second}>
                            <img src="\img\Recent item 2 img (11).png" alt="recentitems2img11" className={styles.imginside1second} /></div>
                        <div className={styles.img2second}>
                            <img src="\img\Recent item 2 img (12).png" alt="recentitems2img12" className={styles.imginside2second} /></div>
                        <div className={styles.img3second}>
                            <img src="\img\Recent item 2 img (13).png" alt="recentitems2img13" className={styles.imginside3second} /></div>

                    </div>

                    <div className={styles.kitchensupply}>Kitchen Supply</div>
                    <div className={styles.items3second}>3 Items | € 114.00</div>
                    <div className={styles.updatekitchensupply}>Updated At: 10/10/2023 20:10</div>
                    <div className={styles.imgftsecond}>
                        <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrashsecond} /></div>



                </div>

                <div className={styles.seventhinventorybox}>

                    <div className={styles.threeimgboxthird}>
                        <div className={styles.img1third}>
                            <img src="\img\Recent item 2 img (14).png" alt="recentitems2img1" className={styles.imginside1third} /></div>
                        <div className={styles.img2third}>
                            <img src="\img\Recent item 2 img (15).png" alt="recentitems2img15" className={styles.imginside2third} /></div>

                    </div>

                    <div className={styles.sanitarysupply}>Sanitary Supply</div>
                    <div className={styles.items3third}>2 Items | € 98.00</div>
                    <div className={styles.updatesanitarysupply}>Updated At: 10/10/2023 20:10</div>
                    <div className={styles.imgfthird}>
                        <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrashthird} /></div>

                </div>

                <div className={styles.eightthinventorybox}>

                    <div className={styles.threeimgbox}>
                        <div className={styles.img1}>
                            <img src="\img\Recent item 2 img (8).png" alt="recentitems2img8" className={styles.imginside1} /></div>
                        <div className={styles.img2}>
                            <img src="\img\Recent item 2 img (9).png" alt="recentitems2img9" className={styles.imginside2} /></div>
                        <div className={styles.img3}>
                            <img src="\img\Recent item 2 img (10).png" alt="recentitems2img10" className={styles.imginside3} /></div>

                    </div>

                    <div className={styles.officesupply}>Office Supply</div>
                    <div className={styles.items3}>3 Items | € 338.00</div>
                    <div className={styles.updateofficesupply}>Updated At: 10/10/2023 20:10</div>
                    <div className={styles.imgft}>
                        <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>

                </div>

            </div>



        </div>

    );
};

