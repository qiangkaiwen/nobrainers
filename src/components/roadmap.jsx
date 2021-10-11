export const Roadmap = (props) => {
  return (
    <div id="roadmap">
      <div className="container-fluid">
        <div className="row">

          <div id="roadmap-title" className="row">
            <span>{props.data ? props.data.title : "loading"}</span>
          </div>

          <div id="roadmap-accordion" className="row">
            <div className="accordion" id="accordion3">

              <div id="roadmap-phase" className="row">
                <span>{props.data ? props.data.phase1 : "loading"}</span>
              </div>

              <div className="accordion-item" >
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    {props.data ? props.data.accordion_1_title : "loading"}
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion3">
                  <div className="accordion-body">
                    {props.data ? props.data.accordion1.map((data, index) => (
                      <div key={`${data}-${index}`}>
                        <p>{data.subtitle}</p>
                        <ul>
                          {data.detail
                            ? data.detail.map((data, index) => (
                              <li key={`${data}-${index}`}>{data}</li>
                            ))
                            : "loading"}
                        </ul>
                      </div>
                    )) : "loading"}
                  </div>
                </div>
              </div>

              <div className="accordion-item" >
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    {props.data ? props.data.accordion_2_title : "loading"}
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordion3">
                  <div className="accordion-body">
                    {props.data ? props.data.accordion2.map((data, index) => (
                      <div key={`${data}-${index}`}>
                        <p>{data.subtitle}</p>
                        <ul>
                          {data.detail
                            ? data.detail.map((data, index) => (
                              <li key={`${data}-${index}`}>{data}</li>
                            ))
                            : "loading"}
                        </ul>
                        <br />
                      </div>
                    )) : "loading"}
                  </div>
                </div>
              </div>

              <div className="accordion-item" >
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    {props.data ? props.data.accordion_3_title : "loading"}
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion3">
                  <div className="accordion-body">
                    {props.data ? props.data.accordion3.map((data, index) => (
                      <div key={`${data}-${index}`}>
                        <p>{data.subtitle}</p>
                        <ul>
                          {data.detail
                            ? data.detail.map((data, index) => (
                              <li key={`${data}-${index}`}>{data}</li>
                            ))
                            : "loading"}
                        </ul>
                        <br />
                      </div>
                    )) : "loading"}
                  </div>
                </div>
              </div>

              <div id="roadmap-phase" className="row">
                <span>{props.data ? props.data.phase2 : "loading"}</span>
              </div>

              <div className="accordion-item" >
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    {props.data ? props.data.accordion_4_5_title : "loading"}
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordion3">
                  <div className="accordion-body">
                    {props.data ? props.data.accordion4.map((data, index) => (
                      <div key={`${data}-${index}`}>
                        <p>{data.subtitle}</p>
                        <ul>
                          {data.detail
                            ? data.detail.map((data, index) => (
                              <li key={`${data}-${index}`}>{data}</li>
                            ))
                            : "loading"}
                        </ul>
                        <br />
                      </div>
                    )) : "loading"}
                  </div>
                </div>
              </div>

              <div id="roadmap-phase" className="row">
                <span>{props.data ? props.data.phase3 : "loading"}</span>
              </div>

              <div className="accordion-item" >
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    {props.data ? props.data.accordion_4_5_title : "loading"}
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordion3">
                  <div className="accordion-body">
                    {props.data ? props.data.accordion5.map((data, index) => (
                      <div key={`${data}-${index}`}>
                        <p>{data.subtitle}</p>
                        <ul>
                          {data.detail
                            ? data.detail.map((data, index) => (
                              <li key={`${data}-${index}`}>{data}</li>
                            ))
                            : "loading"}
                        </ul>
                        <br />
                      </div>
                    )) : "loading"}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
