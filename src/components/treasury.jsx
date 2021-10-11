import ethereum from "../assets/img/ethereum.png"

export const Treasury = (props) => {
  return (
    <div id="treasury">
      <div className="container-fluid">
        <div id="treasury-title" className="row">
          <span>{props.data ? props.data.title : "loading"}</span>
        </div>
        <div className="row">
          <div className="col-lg-7">

            <div id="treasury-content" className="row">
              <span>{props.data ? props.data.content : "loading"}</span>
            </div>
            <div id="treasury-accordion" className="row">
              <div className="accordion" id="accordion">
                {props.data ? props.data.detail.map((data, index) => (
                  <div key={index + 10} className="accordion-item" >
                    <h2 className="accordion-header" id={`heading${index + 10}`}>
                      <button className={index + 10 === 10 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index + 10}`} aria-expanded="false" aria-controls={`collapse${index + 10}`}>
                        {data.title}
                      </button>
                    </h2>
                    <div id={`collapse${index + 10}`} className={index + 10 === 10 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={`heading${index + 10}`} data-bs-parent="#accordion">
                      <div className="accordion-body">
                        {data.content.map((detail, index) => (
                          <span key={`${data}-${index}`}>{detail}<br /></span>
                        ))}
                      </div>
                    </div>
                  </div>
                )) : "loading"}
              </div>
            </div>
          </div>
          <div id="treasury-image" className="col-lg-5 text-center">
            <img src={ethereum} className="ethereum" alt="ethereum" />
          </div>
        </div>
      </div>
    </div>
  );
};
