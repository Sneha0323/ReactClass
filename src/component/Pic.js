import './Pic.css'

function Pic ({id,title,like='100k', time, verified,children}){    
    return (
        <>
        <div className="container">
            <div className="image">
                <img src={`https://picsum.photos/id/${id}/160/90`} alt="Laptop"/>
            </div>
            <div className="title"> {title} Developer</div>    
            <div className="channel" > WeCoder {verified && '✅'} </div>
            <div className="views">
            <span>{like}</span> <b>Likes</b> <span>{time}</span>
            </div>
            {children}
        </div>
        </>
    )
}
export default Pic;