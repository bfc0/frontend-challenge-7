import './Card.css'

function Card(props: {
    "id": number,
    "company": string,
    "logo": string,
    "new": boolean,
    "featured": boolean,
    "position": string,
    "role": string,
    "level": string,
    "postedAt": string,
    "contract": string,
    "location": string,
    "languages": Array<string>,
    "tools": Array<string>,
    "setter": (a: string) => void
}) {
    // console.log(props)
    const tags = [...props.languages]
    tags.push(props.role)
    tags.push(props.level)
    const logo = props.logo
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