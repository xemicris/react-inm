function User(){
    const user = undefined;
    if(!user){
        return (<button className="login">Login</button>)
    }
    return (<div>user: {user}</div>)
}

export default User;