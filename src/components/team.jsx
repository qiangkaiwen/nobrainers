import avatar from "../assets/img/avatar.png"

export const Team = (props) => {
  return (
    <div id="team">
      <div className="container-fluid">
        <div id="team-title" className="row">
          <span>{props.data ? props.data.title : "loading"}</span>
        </div>
        <div className="row">
          {
            props.data ? props.data.info.map((data, index) => (
              <div key={`${data}-${index}`} className="col-lg-3 offset-lg-1">
                <div key={`${data}-${index}`} className="card">
                  <img src={avatar} className="card-img-top team-image" alt="Team" />
                  <div className="card-body">
                    <p className="card-text text-center">{data.name}</p>
                  </div>
                </div>
              </div>
            )) : "loading"
          }
        </div>
      </div>
    </div>
  );
};
