
import a from "../styles/a.module.css";




const Package = ({title, services,clr}) => {
    return ( 
             <div className={a.details_membership}>
                            <div className={a.details_membership_title}>
                                {title}
                            </div>
                                <div className={a.details_membership_double}>

                                
                                {
                                    services.map ((s,i) =>
                                    <div className={a.details_membership_line} key={i}>
                                        <span style={{color:clr}} className={a.details_membership_line_box}>&#10003;</span>
                                        <span style={{color:clr}} className={a.details_membership_line_option}>{s}</span>
                                    </div>
                                       )
                                } 
                                </div>
            </div>
     );
}
 
export default Package;