const Section = (props) => {
    return(
        <section className={props.classForSection}>
            <div className="container">
                {props.content}
            </div>
        </section>
    )
};

export default Section;