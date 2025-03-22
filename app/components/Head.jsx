const Head = ({ children }) => {
    return (
        <div className="w-full hero_bg h-[35vh] flex justify-center items-end py-12">
                <h1 className="heading">
                    {children}
                </h1>
        </div>
    )
}

export default Head