

const errMess = (props) => {
    return(
        <div>
            {props.data.length != 0 ?
                <div className="alert alert-danger" role="alert">
                    <p>{props.data}</p>
                </div>   
            
            :
            null
            }
        </div>
        
    )

};

export default errMess;