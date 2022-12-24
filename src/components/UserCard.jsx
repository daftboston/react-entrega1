function UserCard({name, img, email, location}) {
    <h2>{name}</h2>
    <img src={img} alt="imagen persona " />
    <h3>{email}</h3>
    <h3>{location}</h3>
}

export default UserCard