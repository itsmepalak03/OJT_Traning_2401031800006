const Content = () => {
  return (
    <div className="content">

      <div className="row g-4">

        <div className="col-md-3">
          <div className="stat-card">
            <h6>Items Analysed</h6>
            <h2>2.4M+</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card">
            <h6>Accuracy</h6>
            <h2>98%</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card">
            <h6>Collectors</h6>
            <h2>47K+</h2>
          </div>
        </div>

        <div className="col-md-3">
          <div className="stat-card">
            <h6>Reports</h6>
            <h2>563</h2>
          </div>
        </div>

      </div>

      <div className="hero-card mt-4">

        <h2>
          AI Authentication Center
        </h2>

        <p>
          Upload relic images and receive detailed authentication reports.
        </p>

        <button className="btn btn-dark">
          Analyse New Item
        </button>

      </div>

    </div>
  );
};

export default Content;