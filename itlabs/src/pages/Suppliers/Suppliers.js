import { Navigation } from "../../components/Navigation/Navigation";
import styles from "./Suppliers.module.css";
import { Header } from "../../components/Header/Header";

export const Suppliers = () => {

        return (
                <div className={styles.suppliers}>

                        <Navigation />

                        <div className={styles.header}>
                                <Header title="Suppliers" />
                        </div>

                        <div className={styles.inputsearchcontainersuppliers}>

                                <div className={styles.searchiconsuppliers}><img src="/img/Search.png" alt="search" /></div>

                                <input type="text" placeholder="Search Suppliers" className={styles.insidesearchsuppliers} />
                        </div>


                        <div className={styles.buttonaddsuppliers}>
                                <div className={styles.imageaddsuppliers}><img src="\img\Add New.png" alt="addnew" /></div>

                                <button className={styles.addsuppliers}><span className={styles.texts}>ADD SUPPLIER</span></button>
                        </div>


                        {/* Prvi 4 kocki */}
                        <div className={styles.suppliersboxes}>
                                <div className={styles.firstfourboxessuppliers}>


                                        <div className={styles.firstsupplierbox}>

                                                <div className={styles.anhoch}><span className={styles.textanhoch}>Anhoch</span></div>
                                                <div className={styles.anhochaddress}> <span className={styles.adressan1}> Address:</span>   <span className={styles.adressan2}>Address</span> <div className={styles.hr56}></div></div>
                                                <div className={styles.anhochphonenumber}><p className={styles.pnumbertext}>Phone number:</p>  <p className={styles.pnumbernumber}>+38161202543 </p> <div className={styles.hr57}></div></div>
                                                <div className={styles.anhochemail}> <p className={styles.anhochemailtext}>Email: </p> <p className={styles.anhochemailemail}>  example@gmail.com </p> <div className={styles.hr58}></div></div>

                                                <div className={styles.bootomimiges}>
                                                        <div className={styles.imgftpencil}>
                                                                <img src="\img\Edit.png" alt="editpencil" className={styles.editpencil} />    </div>

                                                        <div className={styles.imgft}>
                                                                <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>
                                                </div>
                                        </div>

                                        <div className={styles.secondsupplierbox}>

                                                <div className={styles.setec}> <span className={styles.textsetec}>Setec</span></div>
                                                <div className={styles.setecaddress}><span className={styles.adresssetec1}>Address: </span> <span className={styles.adressset2}> Address </span> <div className={styles.hr}></div></div>
                                                <div className={styles.setecphonenumber}><p className={styles.pnumbersetec}>Phone number:</p> <p className={styles.pnumbersetec2}> +38161202543 </p> <div className={styles.hr2}></div></div>
                                                <div className={styles.setecemail}><p className={styles.setectext}>Email: </p> <p className={styles.setecemailemail}>example@gmail.com</p> <div className={styles.hr3}></div> </div>

                                                <div className={styles.bootomimigessetec}>
                                                        <div className={styles.imgftsetec}>
                                                                <img src="\img\icone-crayon-vert 1.png" alt="editpencil" className={styles.edit} /></div>

                                                        <div className={styles.imgft}>
                                                                <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>
                                                </div>
                                        </div>

                                        <div className={styles.thirdsupplierbox}>

                                                <div className={styles.neptun}> <span className={styles.textneptun}>Neptun</span></div>
                                                <div className={styles.neptunaddress}><span className={styles.adressneptun1}>Address: </span>  <span className={styles.adressneptun2}> Address </span><div className={styles.hr4}></div></div>
                                                <div className={styles.neptunphonenumber}><p className={styles.pnumberneptun}></p> <p className={styles.pnumberneptun1}>Phone number: </p> <p className={styles.pnumberneptun2}>+38161202543 </p><div className={styles.hr5}></div></div>
                                                <div className={styles.neptunemail}> <p className={styles.neptuntext}>Email:</p>  <p className={styles.neptuntext2}>example@gmail.com</p><div className={styles.hr6}></div></div>

                                                <div className={styles.bootomimigesneptun}>
                                                        <div className={styles.imgftneptun}>
                                                                <img src="\img\icone-crayon-vert 1.png" alt="editpencil" className={styles.editneptun} /></div>

                                                        <div className={styles.imgft}>
                                                                <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>
                                                </div>
                                        </div>

                                        <div className={styles.fourthsupplierbox}>

                                                <div className={styles.magroni}> <span className={styles.textmagroni}>Magroni</span></div>
                                                <div className={styles.magroniddress}><span className={styles.adressmagroni1}>Address: </span>  <span className={styles.adressmagroni2}>Address</span> <div className={styles.hr7}></div></div>
                                                <div className={styles.magroniphonenumber}><p className={styles.pnumbermagroni1}>Phone number:</p> <p className={styles.pnumbermagroni2}> +38161202543</p><div className={styles.hr8}></div></div>
                                                <div className={styles.magroniemail}> <p className={styles.texteemailmagroni}>Email:</p>  <p className={styles.texteemailmagroni2}> example@gmail.com </p><div className={styles.hr9}></div></div>

                                                <div className={styles.bootomimigesmagroni}>
                                                        <div className={styles.imgftmagroni}>
                                                                <img src="\img\icone-crayon-vert 1.png" alt="editpencil" className={styles.editmagroni} /></div>

                                                        <div className={styles.imgft}>
                                                                <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>
                                                </div>
                                        </div>

                                </div>

                                {/* 2 red kocki */}

                                <div className={styles.secondfourboxessuppliers}>


                                        <div className={styles.fifthsupplierbox}>

                                                <div className={styles.amazon}><span className={styles.textamazon}>Amazon</span></div>
                                                <div className={styles.amazonaddress}> <span className={styles.adressamazon1}>Address: </span>  <span className={styles.adressamazon2}> Address</span><div className={styles.hr10}></div></div>
                                                <div className={styles.amazonphonenumber}><p className={styles.pnumberamazon}>Phone number:</p> <p className={styles.pnumberamazon2}> +38161202543 </p><div className={styles.hr11}></div></div>
                                                <div className={styles.amazonemail}> <p className={styles.emailtextamazon}>Email: </p> <p className={styles.emailtextamazon2}> example@gmail.com </p><div className={styles.hr12}></div></div>

                                                <div className={styles.bootomimigesamazon}>
                                                        <div className={styles.imgftamzon}>
                                                                <img src="\img\icone-crayon-vert 1.png" alt="editpencil" className={styles.editamzon} /></div>

                                                        <div className={styles.imgft}>
                                                                <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>
                                                </div>
                                        </div>

                                        <div className={styles.sixthsupplierbox}>

                                                <div className={styles.apple}> <p className={styles.appletext}>Apple </p></div>
                                                <div className={styles.appleaddress}> <p className={styles.appletextadress1}>Address:</p> <p className={styles.appletextadress2}>Address</p><div className={styles.hr13}></div></div>
                                                <div className={styles.applephonenumber}><p className={styles.pnumberapple1}>Phone number:</p> <p className={styles.pnumberapple2}> +38161202543 </p><div className={styles.hr14}></div></div>
                                                <div className={styles.appleemail}><p className={styles.emailtexapple}>Email: </p> <p className={styles.emailtexapple1}> example@gmail.com </p><div className={styles.hr15}></div></div>

                                                <div className={styles.bootomimigesapple}>
                                                        <div className={styles.imgftapple}>
                                                                <img src="\img\icone-crayon-vert 1.png" alt="editpencil" className={styles.edit} /></div>

                                                        <div className={styles.imgft}>
                                                                <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>
                                                </div>
                                        </div>

                                        <div className={styles.seventhsupplierbox}>

                                                <div className={styles.pope}> <p className={styles.popetext}>Pope </p></div>
                                                <div className={styles.popeaddress}> <p className={styles.popetextadress1}>Address:</p> <p className={styles.popetextadress2}> Address </p><div className={styles.hr16}></div></div>
                                                <div className={styles.popephonenumber}><p className={styles.pnumberpope1}>Phone number:</p> <p className={styles.pnumberpope2}>+38161202543 </p><div className={styles.hr17}></div></div>
                                                <div className={styles.popeemail}> <p className={styles.emailtexpope1}>Email:</p> <p className={styles.emailtexpope2}>  example@gmail.com </p><div className={styles.hr18}></div></div>

                                                <div className={styles.bottomimagespope}>
                                                        <div className={styles.imgftpope}>
                                                                <img src="\img\icone-crayon-vert 1.png" alt="editpencil" className={styles.editpope} /></div>

                                                        <div className={styles.imgft}>
                                                                <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>
                                                </div>
                                        </div>

                                        <div className={styles.eightthsupplierbox}>

                                                <div className={styles.cgroup}> <p className={styles.cgtext}>City Group </p></div>
                                                <div className={styles.cgroupaddress}> <p className={styles.cgextadress1}>Address:</p> <p className={styles.cgextadress2}>Address </p> <div className={styles.hr19}></div></div>
                                                <div className={styles.cgroupphonenumber}><p className={styles.pnumbercgroup1}>Phone number:</p> <p className={styles.pnumbercgroup2}>+38161202543</p> <div className={styles.hr20}></div></div>
                                                <div className={styles.cgroupemail}> <p className={styles.emailtextcg1}>Email: </p> <p className={styles.emailtextcg2}> example@gmail.com </p><div className={styles.hr21}></div> </div>

                                                <div className={styles.bootomimagescitygroup}>
                                                        <div className={styles.imgftcgroup}>
                                                                <img src="\img\icone-crayon-vert 1.png" alt="editpencil" className={styles.editcgroup} /></div>

                                                        <div className={styles.imgft}>
                                                                <img src="\img\Folder 1 (items) (1).png" alt="imgfolder" className={styles.imgfoldertrash} /></div>
                                                </div>
                                        </div>

                                </div>


                        </div>


                </div>

        );
};