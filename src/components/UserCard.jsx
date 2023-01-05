const UserCard = ({dataUsers,color}) =>{
    const {name, email, location, picture, phone} = dataUsers

         
    
    
   return( 
    <div className="user-card"  style={{color: color}}> 
         <h2>{name.title} {name.first} {name.last} </h2>
         
         <img className="img" src={picture.medium} alt="" />
        
         <h3> <i className='bx bx-envelope'></i> {email}</h3>
         <h3><i className='bx bxs-phone-call' ></i>{phone}</h3>
         <h3><i className='bx bxs-location-plus' ></i> {location.city} {location.state} {location.country} </h3>
    </div>
    )
}

export default UserCard


