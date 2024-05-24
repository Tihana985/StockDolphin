import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./InventoryOfficeSuppliesFirst.module.css";
import { Header} from "../../components/Header/Header";


export const InventoryOfficeSuppliesFirst = () => {

    return (
        <div className={styles.inventoryOfficeSuppliesFirst}>
            <Navigation />

            <div className={styles.headerinventory}>
                    <Header title="Inventory" />
                </div>

            <div className={styles.inputsearchcontainer}>

                <div className={styles.searchicon}><img src="/img/Search.png" alt="search" /></div>

                <input type="text" placeholder="Search Items" className={styles.insidesearch} />
            </div>


            <div className={styles.buttonadditem}>
                <div className={styles.imageadditem}><img src="\img\Add New.png" alt="addnew" /></div>

                <button className={styles.additem}><span className={styles.text}>ADD ITEM</span></button>
            </div>

            {/* Od strana kopcinja -2 */}

            <div className={styles.controlpanel}>


                <button className={styles.buttoncontrolpanel}><div className={styles.imgcontrolpanel}><img src="\img\Control Panel.png" alt="control panel" /></div></button>
            </div>

            <div className={styles.list}>
                <div className={styles.imglist}>  <img src="\img\List.png" alt="list" /> </div>

                <button className={styles.buttonlist}></button>
            </div>


            {/* Tret del - naracki so sliki */}

            <div className={styles.itemsboxes}>
                <div className={styles.firstfourorders}>


                    <div className={styles.firstitembox}>

                        <div className={styles.imgbox}>
                            <div className={styles.img1}>
                                <img src="\img\Recent item 2 img (17).png" alt="recentitems2img17" className={styles.imginside1} /></div>

                        </div>

                        <div className={styles.item1}>Mouse</div>
                        <div className={styles.number1}>7 Purchase records  | € 338.00</div>
                        <div className={styles.imgft}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>



                    </div>

                    <div className={styles.seconditembox}>

                        <div className={styles.imgbox2}>
                            <div className={styles.img2}>
                                <img src="\img\Recent item 2 img (16).png" alt="recentitems2img16" className={styles.imginside2} /></div>

                        </div>

                        <div className={styles.item2}>Keyboard</div>
                        <div className={styles.number2}>3 Purchase records  | € 338.00</div>
                        <div className={styles.imgft2}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash2} /></div>

                    </div>

                    {/* Treta */}

                    <div className={styles.thirditembox}>

                        <div className={styles.threeimgbox3}>
                            <div className={styles.img31}>
                                <img src="\img\Recent item 2 img (8).png" alt="recentitems2img8" className={styles.imginside31} /></div>
                            <div className={styles.img32}>
                                <img src="\img\Recent item 2 img (9).png" alt="recentitems2img9" className={styles.imginside32} /></div>
                            <div className={styles.img33}>
                                <img src="\img\Recent item 2 img (10).png" alt="recentitems2img10" className={styles.imginside33} /></div>

                        </div>

                        <div className={styles.officesupply3}>Office Supply</div>
                        <div className={styles.items33}>3 Items | € 338.00</div>
                        <div className={styles.imgft3}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash3} /></div>

                    </div>

                </div>
                <div className={styles.fourthtembox}>

                    <div className={styles.imgbox4}>
                        <div className={styles.img4}>
                            <img src="\img\Recent item 2 img (17).png" alt="recentitems2img17" className={styles.imginside4} /></div>

                    </div>

                    <div className={styles.item4}>Mouse</div>
                    <div className={styles.number4}>7 Purchase records  | € 338.00</div>
                    <div className={styles.imgft4}>
                        <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash4} /></div>



                </div>



                {/* Dolen red kocki  */}
                <div className={styles.secondfourorders}>

                    <div className={styles.fifthitembox}>
                        <div className={styles.imgbox5}>
                            <div className={styles.img5}>
                                <img src="\img\Recent item 2 img (16).png" alt="recentitems2img16" className={styles.imginside5} /></div>

                        </div>

                        <div className={styles.item5}>Keyboard</div>
                        <div className={styles.number51}>3 Purchase records  | € 338.00</div>
                        <div className={styles.imgft5}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash5} /></div>
                    </div>

                    <div className={styles.sixthtembox}>

                        <div className={styles.threeimgbox6}>
                            <div className={styles.img6}>
                                <img src="\img\Recent item 2 img (8).png" alt="recentitems2img8" className={styles.imginside6} /></div>
                            <div className={styles.img61}>
                                <img src="\img\Recent item 2 img (9).png" alt="recentitems2img9" className={styles.imginside66} /></div>
                            <div className={styles.img62}>
                                <img src="\img\Recent item 2 img (10).png" alt="recentitems2img10" className={styles.imginside666} /></div>

                        </div>

                        <div className={styles.officesupply6}>Office Supply</div>
                        <div className={styles.items6}>3 Items | € 338.00</div>
                        <div className={styles.imgft6}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash6} /></div>

                    </div>

                    <div className={styles.seventhitembox}>
                        <div className={styles.imgbox7}>
                            <div className={styles.img7}>
                                <img src="\img\Recent item 2 img (16).png" alt="recentitems2img16" className={styles.imginside7} /></div>

                        </div>

                        <div className={styles.item7}>Keyboard</div>
                        <div className={styles.number7}>3 Purchase records  | € 338.00</div>
                        <div className={styles.imgft7}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash7} /></div>
                    </div>

                    <div className={styles.eightitembox}>
                        <div className={styles.imgbox8}>
                            <div className={styles.img8}>
                                <img src="\img\Recent item 2 img (16).png" alt="recentitems2img16" className={styles.imginside1} /></div>

                        </div>

                        <div className={styles.item8}>Keyboard</div>
                        <div className={styles.number8}>3 Purchase records  | € 338.00</div>
                        <div className={styles.imgft8}>
                            <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash8} /></div>
                    </div>



                </div>

                <div className={styles.editcategory}>
                    <button className={styles.butoneditcategory}> 
                    <img src="\img\Edit (2).png" alt="editpencil" className={styles.imgpencil}/> <span>Edit Category</span>
                    
                    
                    </button>




                </div>
            </div>






        </div>

    )
}