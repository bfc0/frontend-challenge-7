import './Card.css'

function Card(props) {
    console.log(props)
    // return (<div>{JSON.stringify(props)}</div>)
    const tags = [...props.languages]
    tags.push(props.role)
    tags.push(props.level)
    const logo = "." + props.logo
    return (
        <div className={props.featured ? "card feat" : "card"}>
            <img src={logo} alt="logo" />
            <div className="content">
                <span className='company'>{props.company}&nbsp;</span>
                {props.new && <span className="card__new">&nbsp;new!&nbsp;</span>}
                {!!props.featured && <span className="card__featured">&nbsp;featured&nbsp;</span>}
                <p className="card__position">{props.position}</p>
                <div className="card__opts">
                    <span>{props.postedAt}&nbsp;⸱</span>
                    <span>&nbsp;{props.contract}&nbsp;⸱</span>
                    <span>&nbsp;{props.location}&nbsp;</span>

                </div>
            </div>
            <div className="tags">
                {tags.map((tag, idx) => (
                    <span key={idx} className='tag' onClick={() => props.setter(tag)}>{tag}&nbsp;</span>
                ))}
            </div>
        </div >
    )
}

export default Card