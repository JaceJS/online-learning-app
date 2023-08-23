const Breadcrumbs = (props) => {
    // eslint-disable-next-line react/prop-types
    const { title, description } = props;
    return (
        <div className="breadcrumbs" data-aos="fade-in">
            <div className="container">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Breadcrumbs;
