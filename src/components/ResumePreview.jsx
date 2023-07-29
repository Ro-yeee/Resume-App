function ResumePreview({data}) {
  return (
    <div className="ResumePreview">
        <div className="ResumeTop">
            <div className="Header">
                <div className="HeadTag">
                    <h1>Mighty Thor</h1>
                    <span>
                        Front-End Developer
                    </span>
                </div>
                <div className="imgContainer" style={data.fileSrc ? {backgroundColor:"none"} : {background:"black"}} >
                  <img src={data.fileSrc} alt={data.filename} />
                </div>
            </div>
            <p>From the moment I produced the very first "Hello World" in the console, I knew I was hooked into the world of software development. But software development is not "just a job" for me, it's offered an engaging challenge to continually learn and improve my skills in creating high-quality software.  It  became a full-fledged passion that only gets more exciting with time. Below you'll find projects I've completed that showcase my skills and general background in developing software.</p>
        </div>
    </div>
  )
}

export default ResumePreview
