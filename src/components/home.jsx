import home_image from "../assets/img/home.png";

export const Home = (props) => {
  return (
    <div id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <div id="home-content" className="row">
              {props.data ? props.data.content.map((data, index) => (
                <span key={`${data}-${index}`}>{data}</span>
              )) : "loading"}
            </div>
            <div id="home-detail" className="row">
              <span>{props.data ? props.data.detail : "loading"}</span>
            </div>
            <button type="button" className="btn btn-custom">{props.data ? props.data.button : 'Loading'}</button>
          </div>
          <div id="home-image" className="col-lg-8 text-center">
            <img className="brains-group" src={home_image} alt="Brains Group" />
          </div>
        </div>
      </div>
    </div>
  );
};
